import * as React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table'

export interface PDFDocumentProps {
  number: number
  title: string
  score: number
  episodes: number
  status: string
}

export const PDFDocument: React.FC<{ data: Array<PDFDocumentProps> }> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Table data={data}>
        <TableHeader textAlign={'center'}>
          <TableCell>No</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Score</TableCell>
          <TableCell>Episodes</TableCell>
          <TableCell>Status</TableCell>
        </TableHeader>
        <TableBody>
          <DataTableCell getContent={r => r.number} />
          <DataTableCell getContent={r => r.title} />
          <DataTableCell getContent={r => r.score} />
          <DataTableCell getContent={r => r.episodes} />
          <DataTableCell getContent={r => r.status} />
        </TableBody>
      </Table>
    </Page>
  </Document>
)

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

export default PDFDocument
