import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Checkbox: ComponentMultiStyleConfig = {
  parts: ['control', 'label', 'icon'],
  baseStyle: {
    icon: {
      height: '8px',
    },
    control: {
      borderColor: 'brand.gainsboro',
      borderWidth: '1px',
      _focus: {
        boxShadow: 'none',
      },
    },
    label: {
      lineHeight: 'shorter',
      fontWeight: 'normal',
      fontFamily: 'Proxima Nova',
      color: 'brand.darkSlateBlue',
    },
  },
  sizes: {
    md: {
      control: {
        w: '4',
        h: '4',
      },
      label: {
        fontSize: 'xs',
      },
    },
  },
  variants: {
    primary: {
      control: {
        _checked: {
          bgColor: 'brand.orange',
          borderColor: 'brand.orange',
          _hover: {
            bgColor: 'brand.orange',
            borderColor: 'brand.orange',
          },
        },
      },
    },
    secondary: {
      control: {
        borderColor: 'brand.gainsboro',
        _checked: {
          bgColor: 'brand.ultramarine',
          borderColor: 'brand.ultramarine',
          _hover: {
            bgColor: 'brand.ultramarine',
            borderColor: 'brand.ultramarine',
          },
        },
      },
    },
  },
}
