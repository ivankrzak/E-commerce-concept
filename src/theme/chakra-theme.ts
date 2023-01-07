import {
  CloseAllToastsOptions,
  extendTheme,
  ToastId,
  UseToastOptions,
} from '@chakra-ui/react'
import { mode, StyleFunctionProps, Styles } from '@chakra-ui/theme-tools'
import * as Components from './components'
import { BASE_FONT_SIZE_PX, Colors } from './constants'

export interface UseToastReturn {
  (options?: UseToastOptions): string | number | undefined
  close: (id: ToastId) => void
  closeAll: (options?: CloseAllToastsOptions | undefined) => void
  update(
    id: ToastId,
    options: Pick<
      UseToastOptions,
      | 'position'
      | 'onCloseComplete'
      | 'duration'
      | 'title'
      | 'status'
      | 'render'
      | 'description'
      | 'isClosable'
      | 'variant'
    >
  ): void
  isActive: (id: ToastId) => boolean | undefined
}
export const GlobalStyles: Styles = {
  global: (props: StyleFunctionProps) => ({
    '#__next': {
      height: '100%',
    },
    // Chakra probably doesn't have typings for the array style of css rule declaration:
    // https://github.com/chakra-ui/chakra-ui/issues/3410
    /* Scrollbars */
    '::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'backoffice.wildBlueYonder',
      borderRadius: '6px',
    },
    '::-webkit-scrollbar-track:hover': {
      backgroundColor: 'backoffice.wildBlueYonder',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'backoffice.ebony',
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'backoffice.primary',
    },
    '*': {
      scrollbarColor: 'backoffice.wildBlueYonder backoffice.ghostWhite',
      scrollbarWidth: 'thin',
    },
    '::selection': {
      color: 'white',
      backgroundColor: 'backoffice.primary',
    },
    html: {
      fontSize: BASE_FONT_SIZE_PX,
      scrollBehavior: 'smooth',
    },
    body: {
      height: '100vh',
      minHeight: '100vh',
      minWidth: '320px',
      fontFamily: 'Space Grotesk',
      fontSize: '14px',
      bg: mode('backoffice.ghostWhite', 'backoffice.deepPurple')(props),
      color: mode('backoffice.deepPurple', 'backoffice.ghostWhite')(props),
    },
    'body *': {
      fontFamily: 'Space Grotesk',
    },
    '*::placeholder': {
      color: 'backoffice.wildBlueYonder',
      textTransform: 'uppercase',
      fontSize: '14px',
      opacity: 1,
    },
    '*, *::before, &::after': {
      borderColor: 'backoffice.primary',
    },
    'a, button': {
      touchAction: 'manipulation',
    },
    input: {
      fontFamily: 'Space Grotesk',
    },
    pre: {
      tabSize: 2,
    },
  }),
}

const CustomTheme = {
  colors: {
    ...Colors,
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
  },
  styles: GlobalStyles,
  sizes: {
    container: {
      sm: '660px',
      xl: '1296px',
    },
  },
  components: {
    ...Components,
  },
}

// Due to chakra TS theme generating script
// eslint-disable-next-line @typescript-eslint/naming-convention
export const theme = extendTheme(CustomTheme)
