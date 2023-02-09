/* eslint-disable no-console */
import formidable, { File } from 'formidable'
import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const config = {
  api: {
    bodyParser: false,
  },
}

type FormDataProps = {
  files: File[]
  metaData: {
    bucket?: string
    path?: string
  }
}

// TODO check if temporary file is deleted after CDN upload , if not create clean up function

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const processedData = await new Promise<FormDataProps | undefined>(
    (resolve, reject) => {
      const form = new formidable.IncomingForm()
      const formData: FormDataProps = { files: [], metaData: {} }
      form.on('file', (_field, file) => {
        formData.files.push(file)
      })
      form.on('field', (field, file) => {
        formData.metaData = { ...formData.metaData, [field]: file }
      })
      form.on('end', () => resolve(formData))
      form.on('error', (err) => reject(err))
      form.parse(req)
    }
  ).catch((e) => {
    console.log(e)
  })
  console.log(processedData)
  if (processedData && processedData.files?.length) {
    const url = process.env.BUNNY_CDN_URL!
    try {
      await Promise.all(
        processedData.files.map(({ originalFilename, filepath }) => {
          const stream = fs.createReadStream(filepath)

          return fetch(`${url}${originalFilename!}`, {
            body: stream as unknown as ReadableStream<Uint8Array>,
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
        })
      )

      const response = [
        ...processedData.files.map((file) => ({
          ...file,
          fileUrl: `${process.env
            .BUNNY_CDN_PULL_ZONE!}${file.originalFilename!}`,
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
  return Promise.reject(new Error(`Could not upload files. Please try again.`))
}
