import '../../styles/globals.css'
import * as React from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Image from 'next/image'

import { Navbar } from '@components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className={`px-8 md:px-52 bg-white`}>
          <div className="md:mx-7 py-12">
            <Component {...pageProps} />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}
export default MyApp
