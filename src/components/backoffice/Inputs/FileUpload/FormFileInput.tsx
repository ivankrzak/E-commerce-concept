import React, { useRef, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  LayoutProps,
  Stack,
  StackDirection,
  Text,
} from '@chakra-ui/react'
import FileInput, { FileInputProps } from './FileInput'

interface FormFileInputProps extends FileInputProps {
  label?: string
  errorMessage?: string
  isWithShowFiles?: boolean
  labelDirection?: StackDirection
  inputWidth?: LayoutProps['w']
}

const FormFileInput = ({
  id,
  errorMessage,
  label,
  inputWidth = 'full',
  labelDirection = 'column',
  ...rest
}: Omit<FormFileInputProps, 'value' | 'onValueChange'>) => {
  const { control } = useFormContext()

  const [previewImage, setPreviewImage] = useState<
    string | ArrayBuffer | null
  >()
  const fileInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => {
        const { value }: { value: File | undefined } = field

        // Create Util for this
        if (value) {
          const reader = new FileReader()
          reader.onload = () => {
            if (reader.readyState === 2) {
              setPreviewImage(reader.result)
            }
          }
          reader.readAsDataURL(value)
        }
        return (
          <>
            <Stack
              justifyContent="space-between"
              direction={labelDirection}
              align="start"
              alignItems={labelDirection === 'row' ? 'center' : 'left'}
              spacing="1"
              w={inputWidth}
              style={{ columnGap: '30px' }}
            >
              {label && (
                <FormLabel variant="input" whiteSpace="nowrap">
                  {label}
                </FormLabel>
              )}
              <Flex w="full" justifyContent="center">
                {!previewImage && (
                  <Flex
                    w="250px"
                    h="250px"
                    border="2px dashed black"
                    borderRadius="lg"
                    justifyContent="center"
                    alignItems="center"
                    _hover={{ bg: 'blue.100' }}
                    onClick={() => {
                      fileInputRef?.current?.click()
                    }}
                  >
                    <Text>Upload Image</Text>
                  </Flex>
                )}
                {previewImage && (
                  <Image w="250px" h="250px" src={previewImage as string} />
                )}
              </Flex>
              {previewImage && (
                <Button
                  onClick={() => {
                    fileInputRef?.current?.click()
                  }}
                >
                  Change Image
                </Button>
              )}
              {errorMessage && (
                <Box mt="4px">
                  <Text variant="error" mt="0">
                    {errorMessage}
                  </Text>
                </Box>
              )}
            </Stack>
            <FileInput
              ref={fileInputRef}
              id={id}
              {...rest}
              value={value}
              onValueChange={field.onChange}
            />
          </>
        )
      }}
    />
  )
}

export default FormFileInput
