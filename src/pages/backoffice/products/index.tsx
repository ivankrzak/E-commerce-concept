import { getBackOfficeAuthLayout } from 'layouts/BackOfficeAuthLayout'
import type { NextPageWithLayout } from 'next'
import Products from 'routes/products/Products'

const BackOffice: NextPageWithLayout = () => <Products />

BackOffice.getLayout = getBackOfficeAuthLayout
export default BackOffice
