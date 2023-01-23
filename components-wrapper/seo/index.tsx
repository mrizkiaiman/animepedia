import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
  description?: string
  keywords?: string
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  )
}

export default SEO
