import formidable, { File } from 'formidable'
import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const config = {
  api: {
    bodyParser: false,
  },
}

type ProcessedFiles = Array<[string, File]>
export default async (req: NextApiRequest, res: NextApiResponse) => {
  /* Get files using formidable */
  const files = await new Promise<ProcessedFiles | undefined>(
    (resolve, reject) => {
      const form = new formidable.IncomingForm()
      const formFiles: ProcessedFiles = []
      form.on('file', function (field, file) {
        formFiles.push([field, file])
      })
      form.on('end', () => resolve(formFiles))
      form.on('error', (err) => reject(err))
      form.parse(req, () => {
        //
      })
    }
  ).catch((e) => {
    console.log(e)
  })

  if (files?.length) {
    const processedFiles = files.map((file) => ({
      fileName: file[1].originalFilename,
      readStream: fs.createReadStream(file[1].filepath),
    }))
    const url = process.env.BUNNY_CDN_URL!
    try {
      await Promise.all(
        processedFiles.map(({ fileName, readStream }) =>
          fetch(`${url}${fileName!}`, {
            body: readStream,
            method: 'PUT',
            headers: {
              AccessKey: process.env.BUNNY_CDN_API_KEY!,
              'content-type': 'application/octet-stream',
            },
          }).then(({ ok, status }) => {
            if (ok) {
              return ok
            }

            return Promise.reject(
              new Error(`Could not upload files. Status: ${status}`)
            )
          })
        )
      )

      const response = [
        ...processedFiles.map((file) => ({
          ...file,
          fileUrl: `${url}${file.fileName!}`,
        })),
      ]
      return res.status(200).json(response)
    } catch (error) {
      console.log(error)
      return Promise.reject(
        new Error(`Could not upload files. Please try again.`)
      )
    }
  }
}
