import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Category as CategoryType,
  useCategoriesQuery,
  useCreateProductMutation,
} from 'generated/generated-graphql'
import {
  CdnBucket,
  UploadFileResponse,
  useUploadFiles,
} from 'hooks/useUploadFiles'
import * as z from 'zod'
import FormImageInput from './Inputs/FileUpload/FormImageInput'
import { FormSelect } from './Inputs/Select'
import { FormTextarea } from './Inputs/Textarea'
import { FormTextInput } from './Inputs/TextInput'

enum FieldName {
  Slug = 'slug',
  Name = 'name',
  ShortDescription = 'shortDescription',
  Description = 'description',
  CategoryId = 'categoryId',
  TitleImage = 'titleImage',
}

enum FormLabel {
  Slug = 'Slug',
  Name = 'Name',
  ShortDescription = 'Short Description',
  Description = 'Description',
  Category = 'Category',
  TitleImage = 'Title Image',
}

enum FormPlaceholder {
  Slug = 'Type Slug',
  Name = 'Type Name',
  ShortDescription = 'Type Short Description',
  Description = 'Type Description',
  Category = 'Select Category',
}

type FormValues = {
  [FieldName.Slug]: string
  [FieldName.Name]: string
  [FieldName.ShortDescription]: string
  [FieldName.Description]: string
  [FieldName.CategoryId]: number | null
  [FieldName.TitleImage]: FileList | null
}

// type UploadFileResponse = File &
//   {
//     fileUrl: string
//   }[]

interface CreateProductModalProps extends Omit<ModalProps, 'children'> {
  onSuccess?: () => void
  onClose: () => void
}

export const CreateProductModal: React.VFC<CreateProductModalProps> = ({
  onSuccess,
  onClose,
  ...rest
}) => {
  const createProductValidationSchema = z.object({
    [FieldName.Slug]: z.string(),
    [FieldName.Name]: z.string().min(5),
    [FieldName.ShortDescription]: z.string(),
    [FieldName.Description]: z.string(),
    [FieldName.CategoryId]: z.string(),
    [FieldName.TitleImage]: z.instanceof(FileList),
  })

  const methods = useForm<FormValues>({
    defaultValues: {
      [FieldName.Slug]: '',
      [FieldName.Name]: '',
      [FieldName.ShortDescription]: '',
      [FieldName.Description]: '',
      [FieldName.CategoryId]: null,
      [FieldName.TitleImage]: null,
    },
    resolver: zodResolver(createProductValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })
  const { data: categoryData } = useCategoriesQuery()
  const [
    createNewProduct,
    { data: newProductData, loading: isProductCreationPending },
  ] = useCreateProductMutation()
  const {
    uploadFiles,
    error: fileUploadError,
    isUploadPending,
  } = useUploadFiles()

  const submit = async ({
    slug,
    name,
    shortDescription,
    description,
    categoryId,
    titleImage,
  }: FormValues) => {
    // TODO add check if product name exists
    let uploadedFiles: void | UploadFileResponse
    if (titleImage) {
      uploadedFiles = await uploadFiles({
        fileList: titleImage,
        bucket: CdnBucket.PRODUCTS,
        path: slug,
      })
    }

    if (!fileUploadError) {
      const createProduct = async () => {
        await createNewProduct({
          variables: {
            input: {
              slug,
              name,
              shortDescription: shortDescription || null,
              description: description || null,
              categoryId: Number(categoryId),
              ...(uploadedFiles && { titleImage: uploadedFiles[0].fileUrl }),
            },
          },
        })
      }

      return createProduct()
    }
    // Add error toast
    return null
  }

  if (!categoryData) {
    return null
  }
  const { categories } = categoryData
  const formErrors = methods.formState.errors
  console.log(newProductData)
  return (
    <Modal {...rest} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontWeight="600"
          fontSize="20px"
          lineHeight="24px"
          fontStyle="normal"
          p="24px"
        >
          Create Product
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody py="4">
          {isUploadPending || isProductCreationPending ? (
            <Spinner />
          ) : (
            <FormProvider {...methods}>
              <form
                style={{ width: '100%' }}
                onSubmit={methods.handleSubmit(submit)}
              >
                <FormImageInput
                  id={FieldName.TitleImage}
                  label={FormLabel.TitleImage}
                  errorMessage={formErrors.titleImage?.message}
                />
                <FormTextInput
                  id={FieldName.Slug}
                  label={FormLabel.Slug}
                  placeholder={FormPlaceholder.Slug}
                  errorMessage={formErrors.slug?.message}
                  backgroundColor="white"
                />
                <FormTextInput
                  id={FieldName.Name}
                  label={FormLabel.Name}
                  placeholder={FormPlaceholder.Name}
                  errorMessage={formErrors.name?.message}
                  backgroundColor="white"
                />
                <FormTextarea
                  id={FieldName.ShortDescription}
                  label={FormLabel.ShortDescription}
                  placeholder={FormPlaceholder.ShortDescription}
                  errorMessage={formErrors.shortDescription?.message}
                  backgroundColor="white"
                />
                <FormTextarea
                  id={FieldName.Description}
                  label={FormLabel.Description}
                  placeholder={FormPlaceholder.Description}
                  errorMessage={formErrors.description?.message}
                  backgroundColor="white"
                />
                <FormSelect
                  id={FieldName.CategoryId}
                  label={FormLabel.Category}
                  placeholder={FormPlaceholder.Category}
                  errorMessage={formErrors.categoryId?.message}
                  backgroundColor="white"
                  options={categories.map((category) => {
                    const { id, name } = category as CategoryType
                    return {
                      id,
                      value: id,
                      label: name,
                    }
                  })}
                />
                {fileUploadError && <Text color="red">{fileUploadError}</Text>}
                <Button type="submit">Create</Button>
              </form>
            </FormProvider>
          )}
        </ModalBody>
        <ModalFooter justifyContent="flex-start">
          <Button variant="secondary" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
