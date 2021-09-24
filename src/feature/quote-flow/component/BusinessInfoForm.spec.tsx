import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import store from '@/store'

import { BusinessInfoForm } from './BusinessInfoForm'

describe('BusinessInfoForm', () => {
  describe('Business name section', () => {
    it('Has the label "Business Name."', () => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/business name/i)).toBeInTheDocument()
    })

    it('Has the type of "text."', () => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/business name/i))
        .toHaveAttribute('type', 'text')
    })
  })

  describe('Annual sales section', () => {
    it('Has the label "Annual Sales."', () => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/annual sales/i)).toBeInTheDocument()
    })

    it.each([
      ['$50k', 50000],
      ['$75k', 75000],
      ['$100k', 100000],
      ['$150k', 150000],
      ['$200k', 200000]
    ])('Has an entry labelled %p with a value of %p.', (label, value) => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      // Grabbing the first assumes that all are fetched in order of appearance.
      // This is a hack for now and it would be safer to pull the section out as
      // its own component and testing in isolation so that we're not relying on
      // the order of results from getAll* queries.
      expect(screen.getAllByText(label)[0])
        .toHaveAttribute('value', value.toString())
    })
  })

  describe('Annual payroll section', () => {
    it('Has the label "Annual Payroll."', () => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/annual payroll/i)).toBeInTheDocument()
    })

    it.each([
      ['$50k', 50000],
      ['$75k', 75000],
      ['$100k', 100000],
      ['$150k', 150000],
      ['$200k', 200000]
    ])('Has an entry labelled %p with a value of %p.', (label, value) => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      // Grabbing the second assumes that all are fetched in order of appearance.
      // This is a hack for now and it would be safer to pull the section out as
      // its own component and testing in isolation so that we're not relying on
      // the order of results from getAll* queries.
      expect(screen.getAllByText(label)[1])
        .toHaveAttribute('value', value.toString())
    })
  })

  describe('Number of employees section', () => {
    it('Has the label "Number of employees."', () => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/number of employees/i)).toBeInTheDocument()
    })

    it('Has the type of "number."', () => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/number of employees/i))
        .toHaveAttribute('type', 'number')
    })
  })

  describe('Zip code section', () => {
    it('Has the label "Zip code."', () => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/zip code/i)).toBeInTheDocument()
    })

    it('Has the type of "text."', () => {
      render(
        <Provider store={store}>
          <BusinessInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/zip code/i))
        .toHaveAttribute('type', 'text')
    })
  })
})
