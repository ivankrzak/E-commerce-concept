import { Button } from '@chakra-ui/react'
import { getFrontStoreLayout } from 'layouts/StoreFrontLayout'
import type { NextPageWithLayout } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession()

  return (
    <>
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
    </>
  )
}

Home.getLayout = getFrontStoreLayout
export default Home
