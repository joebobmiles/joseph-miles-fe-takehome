import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/type'

import { setContactEmail } from '../store/action'

export const ContactInfoForm = (): JSX.Element => {
  const contactEmail = useSelector<RootState, string>(
    ({ quoteFlow: { contactEmail } }) => contactEmail
  )

  const dispatch = useDispatch()

  return (
    <section>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        required
        value={contactEmail}
        onChange={({ target }) => {
          dispatch(setContactEmail((target as HTMLInputElement).value))
        }}
      />
    </section>
  )
}
