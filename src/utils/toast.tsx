/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'
import { useToast as useChakraToast, UseToastOptions } from '@chakra-ui/react'

interface ExtendedToastOptions
  extends Pick<UseToastOptions, 'title' | 'description' | 'duration'> {
  title?: string
  description?: string
  duration?: number
}

const DEFAULT_TOAST_DURATION = 8000

export const SharedToastOptions: UseToastOptions = {
  position: 'top',
  duration: DEFAULT_TOAST_DURATION,
  isClosable: true,
}

export const useToast = () => {
  const toast = useChakraToast()
  return useCallback((props: UseToastOptions) => {
    toast({ ...SharedToastOptions, ...props })
  }, [])
}
export const useErrorToast = () => {
  const toast = useChakraToast({ status: 'error' })
  return useCallback(({ description, ...props }: ExtendedToastOptions = {}) => {
    toast({
      ...SharedToastOptions,
      ...props,
      description: description ?? 'Something went wrong',
    })
  }, [])
}

export const useSuccessToast = () => {
  const toast = useChakraToast({ status: 'success' })
  return useCallback(({ description, ...props }: ExtendedToastOptions = {}) => {
    toast({
      ...SharedToastOptions,
      ...props,
      description,
    })
  }, [])
}

export const useInfoToast = () => {
  const toast = useChakraToast({ status: 'info' })
  return useCallback((props: ExtendedToastOptions = {}) => {
    toast({
      ...SharedToastOptions,
      ...props,
    })
  }, [])
}

export const useWarningToast = () => {
  const toast = useChakraToast({ status: 'warning' })
  return useCallback((props: ExtendedToastOptions = {}) => {
    toast({
      ...SharedToastOptions,
      ...props,
    })
  }, [])
}
