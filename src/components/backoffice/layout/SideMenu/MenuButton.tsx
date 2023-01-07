import React, { ReactNode } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { DownArrowIcon } from 'components/backoffice/Icons'

interface MenuButtonProps {
  label: string
  isSelected?: boolean
  hasDropdownIndicator?: boolean
  icon?: ReactNode
  onClick?: () => void
}

export const MenuButton = ({
  icon,
  label,
  isSelected,
  hasDropdownIndicator = false,
  onClick,
}: MenuButtonProps) => (
  <Flex
    w="full"
    px="8px"
    py="8px"
    _hover={{
      bg: 'backoffice.primary300',
      color: 'backoffice.ghostWhite',
    }}
    {...(isSelected && {
      bg: 'backoffice.primary',
      color: 'backoffice.ghostWhite',
    })}
    borderRadius="8px"
    align="center"
    onClick={() => onClick?.()}
    cursor="pointer"
  >
    {icon && icon}
    <Text
      w="full"
      mx="8px"
      fontSize="20px"
      textAlign="left"
      {...(isSelected && {
        fontFamily: 'Space Grotesk Medium',
      })}
    >
      {label}
    </Text>
    {hasDropdownIndicator && (
      <motion.div
        variants={{
          open: { rotate: 180 },
          closed: { rotate: 0 },
        }}
        transition={{ duration: 0.2 }}
        style={{ originY: 0.55 }}
      >
        <DownArrowIcon />
      </motion.div>
    )}
  </Flex>
)
