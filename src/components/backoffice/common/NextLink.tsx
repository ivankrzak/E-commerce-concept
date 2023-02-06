import { Text, TextProps } from '@chakra-ui/react'
import Link from 'next/link'
import { UrlObject } from 'url'

interface NextLinkProps extends TextProps {
  href: string | UrlObject
}

export const NextLink = ({ href, children, ...rest }: NextLinkProps) => (
  <Link href={href} passHref>
    {typeof children === 'string' ? (
      <Text variant="link" {...rest}>
        {children}
      </Text>
    ) : (
      children
    )}
  </Link>
)
