import { ComponentMultiStyleConfig, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Input: ComponentMultiStyleConfig = {
  parts: ['field', 'addon'],
  baseStyle: {
    field: {
      fontFamily: 'Space Grotesk',
      borderRadius: '8px',
      borderWidth: '1px',
    },
  },
  variants: {
    outline: (props: StyleFunctionProps) => ({
      field: {
        h: '44px',
        px: '8px',
        py: '12px',
        borderColor: mode(
          'backoffice.wildBlueYonder',
          'backoffice.ebony'
        )(props),
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
      },
      addon: {
        borderColor: mode(
          'backoffice.wildBlueYonder',
          'backoffice.ebony'
        )(props),
        color: mode('backoffice.primary', 'backoffice.ghostWhite')(props),
        lineHeight: '20px',
        fontSize: '16px',
      },
    }),
  },
}
