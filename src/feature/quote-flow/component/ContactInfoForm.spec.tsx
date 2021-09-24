import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import store from '@/store'

import { ContactInfoForm } from './ContactInfoForm'

describe('ContactInfoForm', () => {
  describe('Email section', () => {
    it('Has the label "Email."', () => {
      render(
        <Provider store={store}>
          <ContactInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    it('Has a type of "email."', () => {
      render(
        <Provider store={store}>
          <ContactInfoForm />
        </Provider>
      )
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email')
    })
  })
})
