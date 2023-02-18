import { ReactNode } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { startCase } from 'lodash/fp'
import { transparentize } from 'polished'
import { Colors } from 'theme/constants'
import { Tooltip } from './Tooltip'

type TagProps = {
  label: string
  tooltip?: ReactNode
  background?: string
  borderColor?: string
}

export const Tag = ({ label, tooltip, background, borderColor }: TagProps) => (
  <Box>
    {tooltip ? (
      <Tooltip content={tooltip}>
        <Flex
          px="6px"
          borderRadius="6px"
          cursor="pointer"
          bg={background || transparentize(0.5, Colors.backoffice.primary200)}
          borderColor={borderColor || 'backoffice.primary400'}
          borderWidth="1px"
        >
          <Text
            fontFamily="Space Grotesk Medium"
            fontSize="12px"
            lineHeight="20px"
            color="backoffice.chambray"
            whiteSpace="nowrap"
            _dark={{ color: 'backoffice.ghostWhite' }}
          >
            {startCase(label.toLowerCase())}
          </Text>
        </Flex>
      </Tooltip>
    ) : (
      <Flex
        px="6px"
        borderRadius="6px"
        bg={background || transparentize(0.5, Colors.backoffice.primary200)}
        borderColor={borderColor || 'backoffice.primary400'}
        borderWidth="1px"
      >
        <Text
          fontFamily="Space Grotesk Medium"
          fontSize="12px"
          lineHeight="20px"
          color="backoffice.chambray"
          _dark={{ color: 'backoffice.fogGray' }}
        >
          {startCase(label.toLowerCase())}
        </Text>
      </Flex>
    )}
  </Box>
)
