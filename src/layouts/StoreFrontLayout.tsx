import React from 'react'
import { Flex, HStack, Text } from '@chakra-ui/react'

const FrontStoreLayout: React.FC = ({ children }) => (
  <Flex
    direction="column"
    position="relative"
    w="full"
    minW="100%"
    minH="100vh"
  >
    <Flex w="full" h="80px" justifyContent="center" bg="gray.200">
      <HStack>
        <Text>Home</Text>
        <Text>Store</Text>
        <Text>About</Text>
        <Text>Cart</Text>
      </HStack>
    </Flex>
    <Flex justifyContent="center" w="100%" minH="100%">
      {children}
    </Flex>
  </Flex>
)

const getNavbarLayout = (Test: React.FC) => (page: React.ReactNode) =>
  <Test>{page}</Test>

export const getFrontStoreLayout = getNavbarLayout(FrontStoreLayout)

export default FrontStoreLayout
