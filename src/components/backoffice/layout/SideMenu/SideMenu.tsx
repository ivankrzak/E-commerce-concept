import React from 'react'
import { Button, Flex, useColorMode, VStack } from '@chakra-ui/react'
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

  return (
    <Flex left={0} top={0} direction="column" w="240px" h="100vh">
      <Flex bg="aliceblue" w="full" h="76px" />
      <VStack w="240px" h="full" spacing="8px" p="24px">
        <MenuItem
          label="Dashboard"
          routeTo="/backoffice"
          icon={<HomeIcon w="20px" />}
        />
        <MenuItem
          label="Orders"
          icon={<ShoppingCartIcon w="20px" />}
          subMenu={[
            { label: 'New Orders', routeTo: '/' },
            { label: 'In Progress', routeTo: '/' },
            { label: 'Completed', routeTo: '/' },
          ]}
        />
        <MenuItem
          label="Products"
          icon={<GridIcon w="20px" />}
          routeTo="/backoffice/products"
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
        />
        <MenuItem icon={<UsersIcon w="20px" />} label="Customers" routeTo="/" />
        <MenuItem
          icon={<SettingsIcon w="20px" />}
          label="Settings"
          routeTo="/"
        />
      </VStack>
      <Button bottom={0} onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Flex>
  )
}
