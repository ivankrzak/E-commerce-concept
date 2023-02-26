import Head from 'next/head'
import { useRouter } from 'next/router'

const DEFAULT_KEYWORDS =
  'software development software development company app development web development mobile development software house software agency software engineers custom software development vývoj mobilných aplikácií'
interface Props {
  seoData: {
    title: string
    description: string
    keywords?: string
  }
}

export const SEO = ({ seoData }: Props) => {
  const seo = seoData
  const { pathname } = useRouter()
  const baseUrl = 'localhost:3000/'
  const url = `${baseUrl}${pathname}`

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="keywords"
        content={seo.keywords ? seo.keywords : DEFAULT_KEYWORDS}
      />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {/* <meta property="og:image" content={seo.image.filename} /> */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={seo.description} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content="" />
    </Head>
  )
}
