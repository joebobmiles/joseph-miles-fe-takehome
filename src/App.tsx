import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from '@/store/reducer'
import { QuoteForm } from '@/feature/quote-form'

export default (): JSX.Element => (
  <Provider store={createStore(reducer)}>
    <QuoteForm />
  </Provider>
)
