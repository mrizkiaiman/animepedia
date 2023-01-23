import * as React from 'react'

import { useReactToPrint } from 'react-to-print'

const Example = () => {
  const componentRef = React.useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div>
      <div ref={componentRef}>
        <p>askdjhaksdjn</p>
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  )
}

export default Example
