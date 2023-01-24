import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fireEvent, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'
import Home from '@pages/home/index'

//Mocking
const queryPage = 1
const queryClient = new QueryClient()
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
jest.mock('@react-pdf/renderer', () => {
  return {
    PDFDownloadLink: () => null,
    StyleSheet: {
      create: () => null,
    },
  }
})

describe('Home page', () => {
  test('If app renders home page correctly', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { page: '1' },
    }))

    const HomePage = renderer
      .create(
        <QueryClientProvider client={queryClient}>
          <Home queryPage={queryPage} />
        </QueryClientProvider>,
      )
      .toJSON()
    expect(HomePage).toMatchSnapshot()
  })

  test('If export PDF button renders correctly', () => {
    const ExportPDFButton = screen.queryByTestId('export-pdf-button')
    expect(ExportPDFButton).toBeDefined()
  })

  test('If next page button renders correctly', () => {
    const NextPageButton = screen.queryByTestId('next-page-button')
    expect(NextPageButton).toBeDefined()
  })

  test('If prev page button renders correctly', () => {
    const PrevPageButton = screen.queryByTestId('prev-page-button')
    expect(PrevPageButton).toBeDefined()
  })
})
