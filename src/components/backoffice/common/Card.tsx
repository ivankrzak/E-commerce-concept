import { ReactNode } from 'react'
import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/react'

interface CardProps extends FlexProps {
  children: ReactNode
  title?: string
  titleStyle?: TextProps
}

export const Card = ({ children, title, titleStyle, ...rest }: CardProps) => (
  <Flex
    w="full"
    bg="white"
    borderRadius="8px"
    p="24px"
    justifyContent="space-between"
    direction="column"
    _dark={{
      bg: 'backoffice.deepPurple50',
      color: 'backoffice.ghostWhite',
    }}
    {...rest}
  >
    {title && (
      <Text
        w="full"
        mb="16px"
        fontFamily="Space Grotesk Medium"
        fontSize="20px"
        {...titleStyle}
      >
        {title}
      </Text>
    )}
    {children}
  </Flex>
)
