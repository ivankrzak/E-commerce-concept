// import { transparentize } from 'polished'

export const DeviceBreakpoints = {
  xs: '320px',
  sm: '480px',
  md: '700px', // Tablet
  lg: '1025px', // Desktop
}

export interface ThemeColors {
  backoffice: {
    deepPurple: string
    deepPurple50: string
    deepPurple25: string
    ebony: string
    wildBlueYonder: string
    darkWildBlueYonder: string
    gainsboro: string
    brightGray: string
    fogGray: string
    ghostWhite: string
    black: string
    white: string
    selago: string
    primary: string
    chambray: string
    primary400: string
    primary300: string
    primary200: string
    primary100: string
    secondary: string
  }
  state: {
    success: string
    warning: string
    error: string
    info: string
    hover: string
    hoverLight: string
    errorHover: string
    errorLight: string
  }
}

export const Colors: ThemeColors = {
  backoffice: {
    deepPurple: '#0F1526',
    deepPurple50: '#191E44',
    deepPurple25: '#212860',
    ebony: '#243340',
    selago: '#EFEFFC',
    wildBlueYonder: '#A4ACCA',
    darkWildBlueYonder: '#5C5F88',
    gainsboro: '#D8DBE7',
    brightGray: '#3F4452',
    fogGray: '#F3F6F9',
    ghostWhite: '#F7F8FB',
    black: '#161C2D',
    white: '#FFFFFF',
    primary: '#5C5CDE',
    chambray: '#343B99',
    primary400: '#6C6CE1',
    primary300: '#8D8DE8',
    primary200: '#ADADEF',
    primary100: '#BEBEF2',
    secondary: '#61BDF6',
  },
  state: {
    success: '#76CA66',
    warning: '#FBC756',
    error: '#BA0000',
    info: '#A0C3FF',
    hover: '#798BFF',
    hoverLight: '#EAEBFF',
    errorHover: '#F4D5D5',
    errorLight: '#FEFAFE',
  },
}

export const TEXT_COLOR = Colors.backoffice.primary
export const BASE_FONT_SIZE_PX = '14px'
