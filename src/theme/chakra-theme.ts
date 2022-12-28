import {
  CloseAllToastsOptions,
  extendTheme,
  ToastId,
  UseToastOptions,
} from '@chakra-ui/react'
import { createBreakpoints, Styles } from '@chakra-ui/theme-tools'
import * as Components from './components'
import {
  BASE_FONT_SIZE_PX,
  DeviceBreakpoints,
  HEADER_HEIGHT_PX,
} from './constants'

const Breakpoints = createBreakpoints(DeviceBreakpoints)

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
  global: {
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
      backgroundColor: 'brand.ghostWhite',
      borderRadius: '6px',
    },
    '::-webkit-scrollbar-track:hover': {
      backgroundColor: 'brand.ghostWhite',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'brand.purpleNavy',
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'brand.darkBlueGray',
    },
    '*': {
      scrollbarColor: 'brand.purpleNavy brand.ghostWhite',
      scrollbarWidth: 'thin',
    },
    '::selection': {
      color: 'white',
      backgroundColor: 'brand.purpleNavy',
    },
    html: {
      fontSize: BASE_FONT_SIZE_PX,
      scrollBehavior: 'smooth',
      scrollPaddingTop: HEADER_HEIGHT_PX,
    },
    body: {
      height: '100vh',
      minHeight: '100vh',
      minWidth: '320px',
      fontFamily: 'Space Grotesk',
      fontSize: '14px',
    },
    'body *': {
      fontFamily: 'Space Grotesk',
    },
    '*::placeholder': {
      color: 'brand.wildBlueYonder',
      textTransform: 'uppercase',
      fontSize: 14,
      opacity: 1,
    },
    '*, *::before, &::after': {
      borderColor: 'brand.ultramarine',
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
  },
}

const CustomTheme = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  breakpoints: Breakpoints,
  styles: GlobalStyles,
  sizes: {
    container: {
      sm: '660px',
      xl: '1296px',
    },
  },
  // components: {
  //   ...Components,
  // },
}

// Due to chakra TS theme generating script
// eslint-disable-next-line @typescript-eslint/naming-convention
export const theme = extendTheme(CustomTheme)
