import React, { ReactNode, useState } from 'react'
import { Text, VStack } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  routeTo?: string
  subMenu?: SubMenuItem[]
}

export const MenuItem = ({ icon, label, routeTo, subMenu }: MenuItemProps) => {
  const router = useRouter()

  const [isSelected, setIsSelected] = useState(router.pathname === routeTo)

  return !routeTo ? (
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
          onClick={() => setIsSelected(!isSelected)}
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
            <motion.div variants={ItemVariants}>
              <Link href={menuItem.routeTo}>
                <Text
                  fontFamily="Space Grotesk Light"
                  fontSize="16px"
                  cursor="pointer"
                >
                  {menuItem.label}
                </Text>
              </Link>
            </motion.div>
          ))}
        </VStack>
      </motion.div>
    </motion.div>
  ) : (
    <Link href={routeTo}>
      <MenuButton label={label} isSelected={isSelected} icon={icon} />
    </Link>
  )
}
