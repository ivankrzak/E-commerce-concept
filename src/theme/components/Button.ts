import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    _focus: {
      boxShadow: 'none',
    },
    fontFamily: 'Space Grotesk',
    borderRadius: '8px',
  },
  sizes: {
    sm: {
      w: 'auto',
      h: 'auto',
      px: '16px',
      py: '4px',
      fontSize: '14px',
    },
    md: {
      w: 'auto',
      h: 'auto',
      px: '20px',
      py: '8px',
      fontFamily: 'Space Grotesk',
      fontSize: '18px',
    },
    lg: {
      w: 'auto',
      h: 'auto',
      px: '24px',
      py: '14px',
      fontFamily: 'Space Grotesk Medium',
      fontSize: '18px',
    },
  },
  variants: {
    primary: {
      bgColor: 'backoffice.primary',
      color: 'backoffice.ghostWhite',
      _active: {
        bgColor: 'backoffice.ebony',
      },
      _hover: {
        bgColor: 'backoffice.chambray',
      },
      _disabled: {
        color: 'brand.wildBlueYonder',
        bgColor: 'backoffice.primary100',
        opacity: '1',
      },
    },
    outline: (props: StyleFunctionProps) => ({
      bgColor: mode('backoffice.white', 'backoffice.deepPurple')(props),
      color: mode('backoffice.chambray', 'backoffice.secondary')(props),
      borderColor: mode('backoffice.chambray', 'backoffice.secondary')(props),
      _active: {
        bgColor: 'backoffice.ebony',
      },
      _hover: {
        bgColor: mode('backoffice.primary100', 'backoffice.brightGray')(props),
      },
      _disabled: {
        bgColor: mode('backoffice.white', 'backoffice.deepPurple')(props),
        color: mode(
          'backoffice.wildBlueYonder',
          'backoffice.darkWildBlueYonder'
        )(props),
        borderColor: mode(
          'backoffice.wildBlueYonder',
          'backoffice.darkWildBlueYonder'
        )(props),
        opacity: '1',
      },
    }),
    ghost: {
      _hover: {
        bgColor: 'transparent',
      },
      _active: {
        bgColor: 'transparent',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
}
