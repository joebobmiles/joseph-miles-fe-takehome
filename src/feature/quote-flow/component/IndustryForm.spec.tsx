import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import store from '@/store'

import { IndustryForm } from './IndustryForm'

describe('IndustryForm', () => {
  it('Has the label "Industry."', () => {
    render(
      <Provider store={store}>
        <IndustryForm />
      </Provider>
    )
    expect(screen.getByLabelText(/industry/i)).toBeInTheDocument()
  })

  it.each([
    ['Plumber', 10537],
    ['Software developer', 10391],
    ['Lawyer', 10415],
    ['Handyman', 10109]
  ])('Has an entry labelled %p with a value of %p.', (label, value) => {
    render(
      <Provider store={store}>
        <IndustryForm />
      </Provider>
    )
    expect(screen.getByText(label))
      .toHaveAttribute('value', value.toString())
  })
})
