import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { withAdminAuthorization } from 'hoc/withAuthorization'

const BackOfficeAuthLayout: React.FC = ({ children }) => (
  <Flex direction="column">
    <Flex
      direction="column"
      justifyContent="space-between"
      minH="100vh"
      h="100vh"
    >
      <Box mt="81px" flex="1 1 100%">
        {children}
      </Box>
    </Flex>
  </Flex>
)

const getNavbarLayout = (Test: React.FC) => (page: React.ReactNode) =>
  <Test>{page}</Test>

export const getBackOfficeAuthLayout = getNavbarLayout(
  withAdminAuthorization(BackOfficeAuthLayout)
)

export default BackOfficeAuthLayout
