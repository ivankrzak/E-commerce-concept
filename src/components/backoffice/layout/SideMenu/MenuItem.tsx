import React, { ReactNode } from 'react'
import { VStack } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { NextLink } from 'components/backoffice/common/NextLink'
import { MenuButton } from './MenuButton'

const ItemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.1 } },
}

interface SubMenuItem {
  label: string
  icon?: ReactNode
  routeTo: string
}

interface MenuItemProps {
  icon?: ReactNode
  label: string
  isSelected: boolean
  routeTo?: string
  subMenu?: SubMenuItem[]
}

export const MenuItem = ({
  icon,
  label,
  routeTo,
  subMenu,
  isSelected,
}: MenuItemProps) =>
  !routeTo ? (
    <motion.div
      initial={false}
      animate={isSelected ? 'open' : 'closed'}
      className="menu"
      style={{
        width: '100%',
      }}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        style={{
          width: '100%',
        }}
      >
        <MenuButton
          label={label}
          isSelected={isSelected}
          icon={icon}
          hasDropdownIndicator
        />
      </motion.button>
      <motion.div
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            height: 'auto',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.1,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            height: '0px',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
      >
        <VStack spacing="8px">
          {subMenu?.map((menuItem) => (
            <motion.div key={menuItem.label} variants={ItemVariants}>
              <NextLink
                href={menuItem.routeTo}
                fontFamily="Space Grotesk Light"
                fontSize="16px"
                cursor="pointer"
              >
                {menuItem.label}
              </NextLink>
            </motion.div>
          ))}
        </VStack>
      </motion.div>
    </motion.div>
  ) : (
    <MenuButton
      label={label}
      isSelected={isSelected}
      icon={icon}
      routeTo={routeTo}
    />
  )
