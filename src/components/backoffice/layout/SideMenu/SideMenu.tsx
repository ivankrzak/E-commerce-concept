import React from 'react'
import { Button, Flex, useColorMode, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {
  GridIcon,
  HomeIcon,
  SettingsIcon,
  ShoppingCartIcon,
  StockUpIcon,
  UsersIcon,
} from 'components/backoffice/Icons'
import { MenuItem } from './MenuItem'

export const SideMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { pathname } = useRouter()

  return (
    <Flex left={0} top={0} direction="column" w="240px" h="100vh">
      <Flex bg="aliceblue" w="full" h="76px" />
      <VStack w="240px" h="full" spacing="8px" p="24px">
        <MenuItem
          label="Dashboard"
          routeTo="/backoffice"
          icon={<HomeIcon w="20px" />}
          isSelected={pathname === '/backoffice'}
        />
        <MenuItem
          label="Orders"
          icon={<ShoppingCartIcon w="20px" />}
          subMenu={[
            { label: 'New Orders', routeTo: '/' },
            { label: 'In Progress', routeTo: '/' },
            { label: 'Completed', routeTo: '/' },
          ]}
          isSelected={pathname === '/orders'}
        />
        <MenuItem
          label="Products"
          icon={<GridIcon w="20px" />}
          routeTo="/backoffice/products"
          isSelected={pathname === '/backoffice/products'}
          //   subMenu={[
          //     { label: 'Products', routeTo: '/' },
          //     { label: 'Categories', routeTo: '/' },
          //     { label: 'Options', routeTo: '/' },
          //   ]}
        />
        <MenuItem
          label="Marketing"
          icon={<StockUpIcon w="20px" />}
          subMenu={[
            { label: 'Coupons', routeTo: '/' },
            { label: 'Categories', routeTo: '/' },
            { label: 'Options', routeTo: '/' },
          ]}
          isSelected={pathname === '/orders'}
        />
        <MenuItem
          icon={<UsersIcon w="20px" />}
          label="Customers"
          routeTo="/"
          isSelected={pathname === '/orders'}
        />
        <MenuItem
          icon={<SettingsIcon w="20px" />}
          label="Settings"
          routeTo="/"
          isSelected={pathname === '/orders'}
        />
      </VStack>
      <Button bottom={0} onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Flex>
  )
}
