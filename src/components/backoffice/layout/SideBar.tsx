import React from 'react'
import { Flex, Text, VStack } from '@chakra-ui/react'

export const SideBar = () => (
  <Flex left={0} top={0} direction="column" w="240px" h="100vh" bg="white">
    <VStack align="left">
      <Text fontSize="20px">Dashboard</Text>
      <Text fontSize="20px">Orders</Text>
      <Text fontSize="20px">Products</Text>
      <Text fontSize="20px">Marketing</Text>
      <Text fontSize="20px">Members</Text>
      <Text fontSize="20px">Settings</Text>
    </VStack>
  </Flex>
)
