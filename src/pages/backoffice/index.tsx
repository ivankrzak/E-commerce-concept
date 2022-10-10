import { Box, Text } from '@chakra-ui/react'
import { getBackOfficeAuthLayout } from 'layouts/BackOfficeAuthLayout'
import type { NextPageWithLayout } from 'next'

const BackOffice: NextPageWithLayout = () => (
  <Box>
    <Text>Welcome to backoffice</Text>
  </Box>
)

BackOffice.getLayout = getBackOfficeAuthLayout
export default BackOffice
