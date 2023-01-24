import * as React from 'react'

import { Page, Text, View, Document, StyleSheet, Image, Link } from '@react-pdf/renderer'
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table'

export interface PDFDocumentAnimeProps {
  number: number
  title: string
  score: number
  episodes: number
  status: string
}

export interface PDFDocumentYGOProps {
  number: number
  id: string
  name: string
  type: string
  race: string
}

export const PDFDocumentAnime: React.FC<{ data: Array<PDFDocumentAnimeProps>; page?: number }> = ({ data, page }) => (
  <Document>
    <Page size="A4" style={styles.container}>
      <View style={styles.banner}>
        <Image style={{ height: 120, width: 160 }} src="/main/icon.png" />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16 }}>
          <Text style={{ fontSize: 32, fontWeight: 'extrabold' }}>Animepedia</Text>
          <Text style={{ fontSize: 10, marginBottom: 2 }}>
            <Link src="https://animepedia.mrizkiaiman.com">animepedia.mrizkiaiman.com</Link>
          </Text>
          <Text style={{ fontSize: 10 }}>Page {page || '-'}</Text>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <Table data={data}>
          <TableHeader textAlign={'center'}>
            <TableCell style={styles.tableCell} weighting={0.05}>
              No
            </TableCell>
            <TableCell style={styles.tableCell} weighting={0.5}>
              Title
            </TableCell>
            <TableCell style={styles.tableCell} weighting={0.1}>
              Score
            </TableCell>
            <TableCell style={styles.tableCell} weighting={0.1}>
              Episodes
            </TableCell>
            <TableCell style={styles.tableCell} weighting={0.25}>
              Status
            </TableCell>
          </TableHeader>
          <TableBody>
            <DataTableCell weighting={0.05} style={styles.dataTableCell} getContent={r => r.number} />
            <DataTableCell weighting={0.5} style={styles.dataTableCell} getContent={r => r.title} />
            <DataTableCell weighting={0.1} style={styles.dataTableCell} getContent={r => r.score} />
            <DataTableCell weighting={0.1} style={styles.dataTableCell} getContent={r => r.episodes} />
            <DataTableCell weighting={0.25} style={styles.dataTableCell} getContent={r => r.status} />
          </TableBody>
        </Table>
      </View>
    </Page>
  </Document>
)

export const PDFDocumentYGO: React.FC<{ data: Array<PDFDocumentYGOProps>[] }> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.tableContainer}>
          <Table data={item}>
            <TableHeader textAlign={'center'}>
              <TableCell style={styles.tableCell} weighting={0.05}>
                No
              </TableCell>
              <TableCell style={styles.tableCell} weighting={0.1}>
                ID
              </TableCell>
              <TableCell style={styles.tableCell} weighting={0.5}>
                Name
              </TableCell>
              <TableCell style={styles.tableCell} weighting={0.35}>
                Type
              </TableCell>
              <TableCell style={styles.tableCell} weighting={0.1}>
                Race
              </TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell weighting={0.05} style={styles.dataTableCell} getContent={r => r.number} />
              <DataTableCell weighting={0.1} style={styles.dataTableCell} getContent={r => r.id} />
              <DataTableCell weighting={0.5} style={styles.dataTableCell} getContent={r => r.name} />
              <DataTableCell weighting={0.35} style={styles.dataTableCell} getContent={r => r.type} />
              <DataTableCell weighting={0.1} style={styles.dataTableCell} getContent={r => r.race} />
            </TableBody>
          </Table>
        </View>
      ))}
    </Page>
  </Document>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4E4E4',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
    marginBottom: 32,
  },
  tableContainer: {
    padding: 12,
    margin: 12,
    marginTop: 24,
    marginBottom: 24,
  },
  tableCell: {
    fontSize: 10,
  },
  dataTableCell: {
    textAlign: 'center',
    fontSize: 8,
    paddingVertical: 2,
  },
})

export default PDFDocumentAnime
