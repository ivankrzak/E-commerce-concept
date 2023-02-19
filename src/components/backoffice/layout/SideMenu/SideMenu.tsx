import React from 'react'
import { Button, Flex, useColorMode, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Route } from 'constants/routes'
import {
  HomeIcon,
  SettingsIcon,
  ShoppingCartIcon,
  StockUpIcon,
  UsersIcon,
} from 'components/backoffice/Icons'
import { TshirtIcon } from 'components/backoffice/Icons/TshirtIcon'
import { MenuItem } from './MenuItem'

export const SideMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { pathname } = useRouter()

  return (
    <Flex
      left={0}
      top={0}
      direction="column"
      w="240px"
      h="100vh"
      bg="backoffice.ghostWhite"
      _dark={{ bg: 'backoffice.deepPurple' }}
    >
      <Flex bg="aliceblue" w="full" h="76px" />
      <VStack w="240px" h="full" spacing="8px" p="24px">
        <MenuItem
          label="Dashboard"
          routeTo={Route.BackOffice.BackofficeDashboard()}
          icon={<HomeIcon w="20px" />}
          isSelected={pathname === Route.BackOffice.BackofficeDashboard()}
        />
        <MenuItem
          label="Orders"
          icon={<ShoppingCartIcon w="20px" />}
          routeTo={Route.BackOffice.Orders()}
          isSelected={pathname === Route.BackOffice.Orders()}
        />
        <MenuItem
          label="Products"
          icon={<TshirtIcon w="20px" />}
          routeTo={Route.BackOffice.Products()}
          isSelected={pathname === Route.BackOffice.Products()}
          //   subMenu={[
          //     { label: 'Products', routeTo: '/' },
          //     { label: 'Categories', routeTo: '/' },
          //     { label: 'Options', routeTo: '/' },
          //   ]}
        />
        <MenuItem
          label="Marketing"
          icon={<StockUpIcon w="20px" />}
          routeTo={Route.BackOffice.Marketing()}
          isSelected={pathname === Route.BackOffice.Marketing()}
        />
        <MenuItem
          icon={<UsersIcon w="20px" />}
          label="Customers"
          routeTo={Route.BackOffice.Customers()}
          isSelected={pathname === Route.BackOffice.Customers()}
        />
        <MenuItem
          icon={<SettingsIcon w="20px" />}
          label="Settings"
          routeTo={Route.BackOffice.Settings()}
          isSelected={pathname === Route.BackOffice.Settings()}
        />
      </VStack>
      <Button bottom={0} onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Flex>
  )
}
