import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const Text: ComponentSingleStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 'normal',
    fontFamily: 'Space Grotesk',
    color: mode('backoffice.deepPurple', 'backoffice.ghostWhite')(props),
  }),
  variants: {
    error: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 'normal',
      fontFamily: 'Space Grotesk Medium',
      color: 'state.error',
    },
    link: {
      cursor: 'pointer',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
}
