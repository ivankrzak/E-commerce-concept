import { getBackOfficeAuthLayout } from 'layouts/BackOfficeAuthLayout'
import type { NextPageWithLayout } from 'next'
import Orders from 'routes/Orders/Orders'

const BackOffice: NextPageWithLayout = () => <Orders />

BackOffice.getLayout = getBackOfficeAuthLayout
export default BackOffice
