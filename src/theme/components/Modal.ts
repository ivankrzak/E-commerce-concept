import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { transparentize } from 'polished'
import { Colors } from 'theme/constants'

const MODAL_BACKGROUND_COLOR = transparentize(
  0.5,
  Colors.backoffice.wildBlueYonder
)

export const Modal: ComponentMultiStyleConfig = {
  parts: ['overlay', 'footer'],
  baseStyle: {
    overlay: {
      bgColor: MODAL_BACKGROUND_COLOR,
    },
    footer: {
      justifyContent: 'left',
    },
  },
}
