import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const Textarea: ComponentSingleStyleConfig = {
  variants: {
    outline: (props: StyleFunctionProps) => ({
      px: '8px',
      py: '12px',
      borderColor: mode('backoffice.wildBlueYonder', 'backoffice.ebony')(props),
      bgColor: mode('backoffice.white', 'backoffice.ebony')(props),
      color: mode('backoffice.primary', 'backoffice.ghostWhite')(props),
      lineHeight: '20px',
      fontSize: '16px',
      _placeholder: {
        textTransform: 'none',
        bgColor: mode('backoffice.white', 'backoffice.ebony')(props),
        color: 'backoffice.wildBlueYonder',
        lineHeight: '20px',
        fontSize: '14px',
      },
      _focus: {
        boxShadow: 'none',
        borderColor: 'backoffice.primary',
        bgColor: mode('backoffice.selago', 'backoffice.brightGray')(props),
      },
      _hover: {
        boxShadow: 'none',
        borderColor: 'backoffice.primary',
        bgColor: mode('backoffice.selago', 'backoffice.brightGray')(props),
      },
      _invalid: {
        bgColor: 'state.errorHover',
        borderWidth: '1px',
        boxShadow: 'none',
      },
    }),
  },
}
