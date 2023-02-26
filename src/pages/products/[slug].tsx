import { getFrontStoreLayout } from 'layouts/StoreFrontLayout'
import type { NextPageWithLayout } from 'next'
import { ProductPage } from 'routes/ProductPage'

const ProductDetail: NextPageWithLayout = () => <ProductPage />

ProductDetail.getLayout = getFrontStoreLayout
export default ProductDetail
