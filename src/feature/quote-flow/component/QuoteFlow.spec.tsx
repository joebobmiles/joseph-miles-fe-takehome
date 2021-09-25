import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { QuoteFlow } from './QuoteFlow'

describe.skip('QuoteFlow', () => {
  describe('Business name section', () => {
    it('Has the label "Business Name."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/business name/i)).toBeInTheDocument()
    })

    it('Has the type of "text."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/business name/i))
        .toHaveAttribute('type', 'text')
    })
  })

  describe('Industry section', () => {
    it('Has the label "Industry."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/industry/i)).toBeInTheDocument()
    })

    it.each([
      ['Plumber', 10537],
      ['Software developer', 10391],
      ['Lawyer', 10415],
      ['Handyman', 10109]
    ])('Has an entry labelled %p with a value of %p.', (label, value) => {
      render(<QuoteFlow />)
      expect(screen.getByText(label))
        .toHaveAttribute('value', value.toString())
    })
  })

  describe('Email section', () => {
    it('Has the label "Email."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    it('Has a type of "email."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email')
    })
  })

  describe('Annual sales section', () => {
    it('Has the label "Annual Sales."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/annual sales/i)).toBeInTheDocument()
    })

    it.each([
      ['$50k', 50000],
      ['$75k', 75000],
      ['$100k', 100000],
      ['$150k', 150000],
      ['$200k', 200000]
    ])('Has an entry labelled %p with a value of %p.', (label, value) => {
      render(<QuoteFlow />)
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
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/annual payroll/i)).toBeInTheDocument()
    })

    it.each([
      ['$50k', 50000],
      ['$75k', 75000],
      ['$100k', 100000],
      ['$150k', 150000],
      ['$200k', 200000]
    ])('Has an entry labelled %p with a value of %p.', (label, value) => {
      render(<QuoteFlow />)
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
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/number of employees/i)).toBeInTheDocument()
    })

    it('Has the type of "number."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/number of employees/i))
        .toHaveAttribute('type', 'number')
    })
  })

  describe('Zip code section', () => {
    it('Has the label "Zip code."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/zip code/i)).toBeInTheDocument()
    })

    it('Has the type of "text."', () => {
      render(<QuoteFlow />)
      expect(screen.getByLabelText(/zip code/i))
        .toHaveAttribute('type', 'text')
    })
  })
})
