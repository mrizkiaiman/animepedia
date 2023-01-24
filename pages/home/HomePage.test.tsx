import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import renderer from 'react-test-renderer'
import Home from './index'

//Mocking
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
          <Home />
        </QueryClientProvider>,
      )
      .toJSON()
    expect(HomePage).toMatchSnapshot()
  })
})
