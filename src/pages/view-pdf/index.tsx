import React from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { PDFDocument } from '@components/pdf'

export const ViewPDF = () => {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <PDFViewer>
          <PDFDocument />
        </PDFViewer>
      )}
      {/* {isClient && (
        <PDFDownloadLink document={<PDFDocument />} fileName="resume.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download my resume')}
        </PDFDownloadLink>
      )} */}
    </>
  )
}

export default ViewPDF
