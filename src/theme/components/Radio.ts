import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Radio: ComponentMultiStyleConfig = {
  parts: ['control', 'label'],
  baseStyle: {
    control: {
      borderColor: 'brand.wildBlueYonder',
      borderWidth: '1px',
      cursor: 'pointer',
      _checked: {
        bgColor: 'white',
        borderColor: 'brand.orange',
        color: 'brand.orange',
        _hover: {
          bgColor: 'white',
          borderColor: 'brand.orange',
          color: 'brand.orange',
        },
      },
      _focus: {
        boxShadow: 'none',
      },
    },
    label: {
      pl: '2',
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
        fontSize: 'sm',
      },
    },
    lg: {
      control: {
        w: '30px',
        h: '30px',
      },
      label: {
        fontSize: 'sm',
      },
    },
  },
}
