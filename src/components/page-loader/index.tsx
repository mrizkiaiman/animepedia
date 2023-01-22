import * as React from 'react'
import Loader from '@components/page-loader/assets/loader-pochita.json'
import LottieLoader from 'react-lottie-loader'

export const PageLoader = () => (
  <div className="h-full w-full flex justify-center items-center">
    <div className="w-112 h-112 pt-24">
      <LottieLoader animationData={Loader} />
    </div>
  </div>
)

export default PageLoader
