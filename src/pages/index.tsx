import { Button, Center, SimpleGrid, Spinner, VStack } from '@chakra-ui/react'
import { useProductListQuery } from 'generated/generated-graphql'
import { getFrontStoreLayout } from 'layouts/StoreFrontLayout'
import type { NextPageWithLayout } from 'next'
import { GetStaticPropsContext } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { ProductCard } from 'components/backoffice/ProductCard'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession()
  const t = useTranslations()
  const { data: productData, loading } = useProductListQuery()

  return (
    <VStack>
      <h1 className={styles.title}>
        {session ? (
          <>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                void signOut()
              }}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              void signIn()
            }}
          >
            Sign In
          </Button>
        )}
      </h1>
      <h1>{t('title')}</h1>
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <SimpleGrid columns={5} spacing="16px">
          {productData?.products?.map(
            ({ slug, name, isActive, category, variants, titleImageUrl }) => (
              <ProductCard
                title={name}
                slug={slug}
                {...(titleImageUrl && { imageSrc: titleImageUrl })}
                productProps={[
                  { label: 'Category', value: category?.name },
                  {
                    label: 'Status',
                    value: isActive ? 'Active' : 'Disabled',
                  },
                  {
                    label: 'Price',
                    value: Math.min(
                      ...variants.map(({ price }) => Number(price))
                    ),
                  },
                  { label: 'Variants', value: `${variants?.length}` },
                  {
                    label: 'Inventory',
                    value: `${variants?.length} units`,
                  },
                  {
                    label: 'Is On Sale',
                    value:
                      variants?.map(({ salePrice }) => salePrice).length !== 0
                        ? 'Yes'
                        : 'No',
                  },
                ]}
              />
            )
          )}
        </SimpleGrid>
      )}
    </VStack>
  )
}

Home.getLayout = getFrontStoreLayout
export default Home

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const lang = locale ?? 'en'
  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      messages: (await import(`../../public/locales/${lang}/common.json`))
        .default,
    },
  }
}
