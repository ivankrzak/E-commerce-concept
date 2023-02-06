import * as yup from 'yup'
import { InferType } from 'yup'
import { YupDropdownOption } from 'components/backoffice/Inputs/Dropdown/Dropdown'

export enum FieldName {
  Slug = 'slug',
  Name = 'name',
  ShortDescription = 'shortDescription',
  Description = 'description',
  CategoryId = 'categoryId',
  TitleImage = 'titleImage',
  Sku = 'sku',
  Price = 'price',
  IsOnSale = 'isOnSale',
  SalePrice = 'salePrice',
  SizeId = 'sizeId',
  ColorId = 'colorId',
  Quantity = 'quantity',
  IsActive = 'isActive',
  AllowOutOfStockPurchase = 'allowOutOfStockPurchase',
  IsDigital = 'isDigital',
  SyncVariantPrices = 'syncVariantPrices',
  HasMultipleVariants = 'hasMultipleVariants',
}

export enum VariantFieldName {
  Sku = 'sku',
  Price = 'price',
  IsOnSale = 'isOnSale',
  SalePrice = 'salePrice',
  SizeId = 'sizeId',
  ColorId = 'colorId',
  Quantity = 'quantity',
}

export const FormLabel = {
  [FieldName.Slug]: 'Slug *',
  [FieldName.Name]: 'Name *',
  [FieldName.ShortDescription]: 'Short Description',
  [FieldName.Description]: 'Description',
  [FieldName.CategoryId]: 'Category *',
  [FieldName.TitleImage]: 'Title Image',
  [FieldName.Sku]: 'SKU *',
  [FieldName.Price]: 'Price *',
  [FieldName.IsOnSale]: 'Is On Sale',
  [FieldName.SalePrice]: 'Sale Price',
  [FieldName.SizeId]: 'Size',
  [FieldName.ColorId]: 'Color',
  [FieldName.Quantity]: 'Units in Stock *',
  [FieldName.AllowOutOfStockPurchase]: 'Allow Out Of Stock Purchase',
  [FieldName.IsDigital]: 'Is Digital Product',
  [FieldName.SyncVariantPrices]: 'Sync prices',
}

export const FormPlaceholder = {
  [FieldName.Slug]: 'Type Slug',
  [FieldName.Name]: 'Type Name',
  [FieldName.ShortDescription]: 'Type Short Description',
  [FieldName.Description]: 'Type Description',
  [FieldName.CategoryId]: 'Select Category',
  [FieldName.Sku]: 'Type SKU',
  [FieldName.Price]: 'Type Price',
  [FieldName.SalePrice]: 'Type Sale Price',
  [FieldName.SizeId]: 'Select Size',
  [FieldName.ColorId]: 'Select Color',
  [FieldName.Quantity]: 'Type Number of Units',
}

export const YupProductValidationSchema = yup.object({
  [FieldName.Slug]: yup.string().min(5).required(),
  [FieldName.Name]: yup.string().min(5).required(),
  [FieldName.ShortDescription]: yup.string(),
  [FieldName.Description]: yup.string(),
  [FieldName.CategoryId]: YupDropdownOption.required(),
  [FieldName.TitleImage]: yup
    .mixed()
    .test('required', 'You need to provide a file', (file) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (file) {
        return true
      }
      return false
    }),
  [FieldName.Sku]: yup.number().required(),
  [FieldName.Price]: yup.number().required(),
  [FieldName.IsOnSale]: yup.boolean(),
  [FieldName.SalePrice]: yup.number().optional(),
  [FieldName.SizeId]: YupDropdownOption.optional(),
  [FieldName.ColorId]: YupDropdownOption.optional(),
  [FieldName.Quantity]: yup.number().required(),
  [FieldName.IsActive]: yup.boolean(),
  [FieldName.AllowOutOfStockPurchase]: yup.boolean(),
  [FieldName.IsDigital]: yup.boolean(),
  [FieldName.SyncVariantPrices]: yup.boolean(),
  [FieldName.HasMultipleVariants]: yup.boolean(),
})

export type YupProductFormValues = InferType<typeof YupProductValidationSchema>

export const YupProductVariantValidationSchema = yup.object({
  [FieldName.Sku]: yup.number().required(),
  [FieldName.Price]: yup.number().required(),
  [FieldName.IsOnSale]: yup.boolean().required(),
  [FieldName.SalePrice]: yup.number().required(),
  [FieldName.SizeId]: YupDropdownOption,
  [FieldName.ColorId]: YupDropdownOption,
  [FieldName.Quantity]: yup.number().required(),
})
export type YupProductVariantFormValues = InferType<
  typeof YupProductVariantValidationSchema
>
