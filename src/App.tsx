import React from 'react'
import { Provider } from 'react-redux'

import store from '@/store'
import { QuoteFlow } from '@/feature/quote-flow'

export default (): JSX.Element => (
  <Provider
    store={store}
  >
    <QuoteFlow />
  </Provider>
)
