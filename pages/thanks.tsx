import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const ThanksPage: React.FunctionComponent = () => (
  <>
    <Head>
      <title>Thank You</title>
    </Head>
    <main className="my-10 text-sm sm:text-6xl text-center">
      <h1>😀 Thanks for your feedback!</h1>
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        <Link href="/">
          <a>Go home</a>
        </Link>
      </button>
    </main>
  </>
)

export default ThanksPage
