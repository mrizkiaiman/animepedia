import * as React from 'react'
import Head from 'next/head'

import Image from 'next/image'

interface ErrorPageProps {
  message: string
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <>
      <Head>
        <title>Sorry, there's a problem - Animepedia</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <Image src="/main/error-illustration.webp" width={450} height={450} alt="error-illustration" />
        <p className="font-extrabold text-xl mt-8 text-center">{message}</p>
      </div>
    </>
  )
}

export default ErrorPage
