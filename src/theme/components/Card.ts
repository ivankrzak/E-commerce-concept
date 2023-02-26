import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { transparentize } from 'polished'
import { Colors } from '../constants'

export const Card: ComponentSingleStyleConfig = {
  baseStyle: {
    backgroundColor: 'white',
    display: 'inline-block',
    borderRadius: '6px',
    color: 'brand.americanBlue',
  },
  variants: {
    layout: {
      boxShadow: `0px 24px 64px 0px ${transparentize(
        0.95,
        Colors.backoffice.black
      )}`,
      borderRadius: 'md',
    },
    userType: {
      textAlign: 'left',
      fontSize: '15px',
      _hover: {
        backgroundColor: 'brand.brightGray',
        boxShadow: `0px 15px 25px 0px ${transparentize(
          0.8,
          Colors.backoffice.black
        )}`,
      },
    },
    disabled: {
      textAlign: 'left',
      fontSize: '15px',
      fontFamily: 'Proxima Nova Light',
      color: 'brand.darkBlueGray',
    },
  },
}
