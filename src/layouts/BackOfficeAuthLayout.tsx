import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { withAdminAuthorization } from 'hoc/withAuthorization'
import { SideMenu } from 'components/backoffice/layout/SideMenu/SideMenu'

const BackOfficeAuthLayout: React.FC = ({ children }) => (
  <Flex position="relative" minW="100%" minH="100vh">
    <SideMenu />
    <Flex justifyContent="center" w="100%" minH="100%">
      <Container mt="80px" maxW="1200px" w="100%">
        {children}
      </Container>
    </Flex>
  </Flex>
)

const getNavbarLayout = (Test: React.FC) => (page: React.ReactNode) =>
  <Test>{page}</Test>

export const getBackOfficeAuthLayout = getNavbarLayout(
  withAdminAuthorization(BackOfficeAuthLayout)
)

export default BackOfficeAuthLayout
