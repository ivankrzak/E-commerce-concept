import React from 'react'
import { Button, Container, Flex, useDisclosure } from '@chakra-ui/react'
import { withAdminAuthorization } from 'hoc/withAuthorization'
import { CreateProductModal } from 'components/backoffice/CreateProductModal'
import { SideBar } from 'components/backoffice/layout/SideBar'

const BackOfficeAuthLayout: React.FC = ({ children }) => {
  const {
    isOpen: isCreateProductModalOpen,
    onOpen: onCreateProductModalOpen,
    onClose: onCreateProductModalClose,
  } = useDisclosure()

  return (
    <Flex position="relative" minW="100%" minH="100vh">
      <SideBar />
      <Flex justifyContent="center" w="100%" minH="100%" bg="blue.200">
        <Container mt="80px" maxW="1100px" w="100%" bg="white">
          {children}
          <Button
            onClick={() => {
              onCreateProductModalOpen()
            }}
          >
            Create Product
          </Button>
        </Container>
        <CreateProductModal
          isOpen={isCreateProductModalOpen}
          onClose={onCreateProductModalClose}
        />
      </Flex>
    </Flex>
  )
}

const getNavbarLayout = (Test: React.FC) => (page: React.ReactNode) =>
  <Test>{page}</Test>

export const getBackOfficeAuthLayout = getNavbarLayout(
  withAdminAuthorization(BackOfficeAuthLayout)
)

export default BackOfficeAuthLayout
