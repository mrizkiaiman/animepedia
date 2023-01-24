import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import renderer from 'react-test-renderer'
import Detail from './[id]'

//Mocking
const id = '12345'
const queryClient = new QueryClient()
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Detail page', () => {
  test('If app renders detail page correctly', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { id },
    }))

    const DetailPage = renderer
      .create(
        <QueryClientProvider client={queryClient}>
          <Detail />
        </QueryClientProvider>,
      )
      .toJSON()
    expect(DetailPage).toMatchSnapshot()
  })
})
