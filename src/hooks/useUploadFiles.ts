import { useState } from 'react'

interface UploadFilesProp {
  fileList: FileList
  bucket?: CdnBucket
  path?: string
}

export enum CdnBucket {
  DOCUMENTS = 'Documents',
  PRODUCTS = 'Products',
}

export type UploadFileResponse = File &
  {
    fileUrl: string
  }[]

export const useUploadFiles = () => {
  const [isUploadPending, setIsUploadPending] = useState(false)
  const [error, setError] = useState('')

  const uploadFiles = async ({ fileList, bucket, path }: UploadFilesProp) => {
    setIsUploadPending(true)
    const formData = new FormData()
    Object.values(fileList).forEach((file) => {
      formData.append('file', file)
      if (bucket) {
        formData.append('bucket', bucket)
      }
      if (path) {
        formData.append('path', path)
      }
    })

    const response = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
    })

    if (response.status === 200) {
      const body = (await response.json()) as UploadFileResponse
      setError('')
      setIsUploadPending(false)
      return body
    }

    setIsUploadPending(false)
    return setError('File Upload failed, please try again.')
  }
  return { uploadFiles, error, isUploadPending }
}
