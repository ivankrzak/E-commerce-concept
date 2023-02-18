import { getBackOfficeAuthLayout } from 'layouts/BackOfficeAuthLayout'
import type { NextPageWithLayout } from 'next'
import OrderDetail from 'routes/Orders/OrderDetail'

const BackOffice: NextPageWithLayout = () => <OrderDetail />

BackOffice.getLayout = getBackOfficeAuthLayout
export default BackOffice
