import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const FormLabel: ComponentSingleStyleConfig = {
  variants: {
    input: (props: StyleFunctionProps) => ({
      fontFamily: 'Space Grotesk Medium',
      fontSize: '14px',
      lineHeight: '20px',
      color: mode('backoffice.primary', 'backoffice.wildBlueYonder')(props),
      ml: '1',
      my: '0',
    }),
  },
}
