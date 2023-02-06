import { getBackOfficeAuthLayout } from 'layouts/BackOfficeAuthLayout'
import type { NextPageWithLayout } from 'next'
import Product from 'routes/products/Product'

const BackOffice: NextPageWithLayout = () => <Product />

BackOffice.getLayout = getBackOfficeAuthLayout
export default BackOffice
