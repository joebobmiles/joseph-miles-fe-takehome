import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from '@/store/reducer'
import { QuoteFlow } from '@/feature/quote-flow'

export default (): JSX.Element => (
  <Provider
    store={createStore(reducer)}
  >
    <QuoteFlow />
  </Provider>
)
