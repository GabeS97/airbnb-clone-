import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      {/* Banner */}

    </div>
  )
}

export default Home