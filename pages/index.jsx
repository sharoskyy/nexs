import Head from 'next/head'

import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Shop from '../components/Shop'

export default function Home() {
  return (
    <>
      <Head>
        <title>nexs.ro</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Navbar />
      </Head>
      <Welcome />
      <Shop />
    </>
  )
}
