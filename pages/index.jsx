import Head from 'next/head'

import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Head>
      <title>nexs.ro - comunitate românească de gaming</title>
    </Head>
    <Navbar />
    <Welcome />
    <Footer />
    </>
  )
}
