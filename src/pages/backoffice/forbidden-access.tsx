import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const ForbiddenAccess: NextPage = () => (
  <Box>
    <Text>You have no persmission to access backoffice</Text>
  </Box>
)

export default ForbiddenAccess
