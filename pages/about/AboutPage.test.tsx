import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import renderer from 'react-test-renderer'
import About from './index'

//Mocking
const queryClient = new QueryClient()

describe('About page', () => {
  test('If app renders about page correctly', () => {
    const AboutPage = renderer
      .create(
        <QueryClientProvider client={queryClient}>
          <About />
        </QueryClientProvider>,
      )
      .toJSON()
    expect(AboutPage).toMatchSnapshot()
  })
})
