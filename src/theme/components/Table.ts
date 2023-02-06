import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Table: ComponentMultiStyleConfig = {
  parts: ['table', 'th', 'td', 'tr'],
  baseStyle: {
    table: { borderColor: 'brand.gainsboro', borderRadius: 'sm' },
    th: {
      textAlign: 'start',
    },
    td: { color: 'brand.darkSlateBlue', textAlign: 'start' },
  },
}
