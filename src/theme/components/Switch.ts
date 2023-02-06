import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Switch: ComponentMultiStyleConfig = {
  parts: ['track', 'thumb', 'container'],
  baseStyle: {
    track: {
      cursor: 'pointer',
      bg: 'backoffice.primary100',
      color: 'blue',
      _checked: {
        bg: 'backoffice.primary',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
    thumb: {
      bg: 'backoffice.ghostWhite',
      _dark: { bg: 'backoffice.deepPurple' },
      h: '4',
      w: '4',
    },
  },
  sizes: {
    lg: {
      track: {
        w: '40px',
        h: '6',
        px: '1',
      },
      thumb: {
        h: '5',
        w: '5',
        alignSelf: 'center',
      },
    },
  },
}
