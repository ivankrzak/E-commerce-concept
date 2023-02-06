import { useBreakpointValue } from '@chakra-ui/react'

export const useIsOnMobile = () => {
  const isOnMobile = useBreakpointValue({
    base: true,
    xs: true,
    sm: true,
    md: true,
    lg: false,
  })

  return isOnMobile
}
