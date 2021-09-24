import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { BusinessInfo } from './BusinessInfo'
import { Contact } from './Contact'
import { Industry } from './Industry'
import { Result } from './Result'

export const QuoteFlowRoutes = (): JSX.Element => (
  <>
    <Route path='/industry'>
      <Industry />
    </Route>
    <Route path='/businessinfo'>
      <BusinessInfo />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
    <Route path='/result'>
      <Result />
    </Route>
    <Route path='*'>
      <Redirect to='/industry' />
    </Route>
  </>
)
