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
        <Navbar />
      </Head>
      <Welcome />
      <Shop />
    </>
  )
}
