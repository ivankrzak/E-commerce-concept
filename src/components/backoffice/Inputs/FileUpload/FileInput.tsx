import React, { useImperativeHandle, useRef } from 'react'
import { Input, InputProps } from '@chakra-ui/react'

export const KIB_IN_BYTES = 1024

export interface FileInputProps extends Omit<InputProps, 'value'> {
  id: string
  value?: FileList
  fileCountLimit?: number
  fileSizeLimitInMiB?: number
  acceptedFileTypes?: string
  onValueChange: (value: FileList) => void
}

const FileInput = React.forwardRef<
  Pick<HTMLInputElement, 'click'>,
  FileInputProps
>(
  (
    {
      id,
      fileCountLimit,
      fileSizeLimitInMiB,
      value,
      onValueChange,
      acceptedFileTypes,
      ...rest
    },
    ref
  ) => {
    const inputRef =
      useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>
    useImperativeHandle(ref, () => ({
      click: () => {
        inputRef?.current?.click()
      },
    }))
    // const reader = new FileReader()

    return (
      <>
        <Input
          id={id}
          name={id}
          ref={inputRef}
          {...rest}
          accept="images/*"
          onChange={(e) => {
            if (!e.target.files) {
              return
            }
            // reader.onload = () => {
            //   if (reader.readyState === 2) {
            //     onValueChange(reader.result)
            //   }
            // }
            // console.log(e.target.files[0])
            // reader.readAsDataURL(e.target.files[0])
            onValueChange(e.target.files)
          }}
          type="file"
          display="none"
        />
      </>
    )
  }
)

export default FileInput
