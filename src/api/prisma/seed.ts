/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { Prisma, PrismaClient } from '@prisma/client'

// eslint-disable-next-line @typescript-eslint/naming-convention
const prisma = new PrismaClient()

const ParentCategoriesData: Prisma.CategoryCreateInput[] = [
  {
    name: 'Clothing',
  },
  {
    name: 'Accessories',
  },
]

const CategoriesData: Prisma.CategoryCreateInput[] = [
  {
    name: 'T-shirt',
    parentCategory: { connect: { name: 'Clothing' } },
  },
  {
    name: 'Pants',
    parentCategory: { connect: { name: 'Clothing' } },
  },
  {
    name: 'Socks',
    parentCategory: { connect: { name: 'Accessories' } },
  },
  {
    name: 'Bags',
    parentCategory: { connect: { name: 'Accessories' } },
  },
  {
    name: 'Hats',
    parentCategory: { connect: { name: 'Accessories' } },
  },
]

const ProductColorsData: Prisma.ProductColorCreateInput[] = [
  {
    name: 'White',
    hexValue: '#ffffff',
  },
  {
    name: 'Black',
    hexValue: '#000000',
  },
  {
    name: 'Burgundy',
    hexValue: '#C70039 ',
  },
  {
    name: 'Blue',
    hexValue: ' #33c1ff ',
  },
  {
    name: 'Yellow',
    hexValue: ' #fff633 ',
  },
]

const ProductSizesData: Prisma.ProductSizeCreateInput[] = [
  {
    value: 'XS',
  },
  {
    value: 'S',
  },
  {
    value: 'M',
  },
  {
    value: 'L',
  },
  {
    value: 'XL',
  },
]

const ProductssData: Prisma.ProductCreateInput[] = [
  {
    slug: 'prismatic-tee',
    name: 'Prismatic Tee',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th",
    category: { connect: { name: 'T-shirt' } },
  },
  {
    slug: 'graphql-tee',
    name: 'Graphql Tee',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th",
    category: { connect: { name: 'T-shirt' } },
  },
  {
    slug: 'knee-high',
    name: 'Knee High',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th",
    category: { connect: { name: 'Socks' } },
  },
]

const ProductVariantssData: Prisma.ProductVariantCreateInput[] = [
  {
    sku: 1001,
    quantity: 100,
    color: { connect: { name: 'White' } },
    size: { connect: { value: 'XS' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1002,
    quantity: 16,
    color: { connect: { name: 'White' } },
    size: { connect: { value: 'S' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1003,
    quantity: 12,
    color: { connect: { name: 'White' } },
    size: { connect: { value: 'M' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1004,
    quantity: 9,
    color: { connect: { name: 'White' } },
    size: { connect: { value: 'L' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1005,
    quantity: 22,
    color: { connect: { name: 'White' } },
    size: { connect: { value: 'XL' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1010,
    quantity: 100,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'XS' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1006,
    quantity: 116,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'S' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1007,
    quantity: 12,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'M' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1008,
    quantity: 79,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'L' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 1009,
    quantity: 122,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'XL' } },
    product: { connect: { slug: 'prismatic-tee' } },
    price: 39,
  },
  {
    sku: 2001,
    quantity: 100,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'XS' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 2002,
    quantity: 116,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'S' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 2003,
    quantity: 12,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'M' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 2004,
    quantity: 79,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'L' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 2005,
    quantity: 122,
    color: { connect: { name: 'Black' } },
    size: { connect: { value: 'XL' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },

  {
    sku: 2006,
    quantity: 33,
    color: { connect: { name: 'Burgundy' } },
    size: { connect: { value: 'XS' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 2007,
    quantity: 3,
    color: { connect: { name: 'Burgundy' } },
    size: { connect: { value: 'S' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 2008,
    quantity: 12,
    color: { connect: { name: 'Burgundy' } },
    size: { connect: { value: 'M' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 2009,
    quantity: 7,
    color: { connect: { name: 'Burgundy' } },
    size: { connect: { value: 'L' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 2010,
    quantity: 2,
    color: { connect: { name: 'Burgundy' } },
    size: { connect: { value: 'XL' } },
    product: { connect: { slug: 'graphql-tee' } },
    price: 39,
  },
  {
    sku: 3001,
    quantity: 71,
    color: { connect: { name: 'Burgundy' } },
    size: { connect: { value: 'S' } },
    product: { connect: { slug: 'knee-high' } },
    price: 39,
  },
  {
    sku: 3001,
    quantity: 26,
    color: { connect: { name: 'Burgundy' } },
    size: { connect: { value: 'L' } },
    product: { connect: { slug: 'knee-high' } },
    price: 39,
  },
]

export const main = async () => {
  try {
    console.log(`Start seeding ...`)

    console.log(`===== CATEGORIES =====`)
    for (const category of ParentCategoriesData) {
      const categoriesData = await prisma.category.create({
        data: category,
      })
      console.log(`Created category with id: ${categoriesData.id}`)
    }
    for (const category of CategoriesData) {
      const categoriesData = await prisma.category.create({
        data: category,
      })
      console.log(`Created category with id: ${categoriesData.id}`)
    }
    console.log(`===== PRODUCT COLORS =====`)
    for (const color of ProductColorsData) {
      const productColorsData = await prisma.productColor.create({
        data: color,
      })
      console.log(`Created product color with id: ${productColorsData.id}`)
    }
    console.log(`===== PRODUCT SIZES =====`)
    for (const size of ProductSizesData) {
      const productSizessData = await prisma.productSize.create({
        data: size,
      })
      console.log(`Created product size with id: ${productSizessData.id}`)
    }
    console.log(`===== PRODUCTS =====`)
    for (const product of ProductssData) {
      const productssData = await prisma.product.create({
        data: product,
      })
      console.log(`Created product size with id: ${productssData.id}`)
    }
    console.log(`===== PRODUCT VARIANTS =====`)
    for (const variant of ProductVariantssData) {
      const productVariantssData = await prisma.productVariant.create({
        data: variant,
      })
      console.log(`Created product size with id: ${productVariantssData.id}`)
    }

    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

void main()
