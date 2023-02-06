import { Button, ButtonProps } from '@chakra-ui/react'
import Link from 'next/link'
import { UrlObject } from 'url'

interface NextButtonProps extends ButtonProps {
  href: string | UrlObject
}

export const NextButton = ({ href, children, ...rest }: NextButtonProps) => (
  <Link href={href} passHref>
    <Button {...rest}>{children}</Button>
  </Link>
)
