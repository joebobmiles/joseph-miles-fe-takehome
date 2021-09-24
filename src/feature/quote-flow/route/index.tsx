import React from 'react'
import { Route } from 'react-router-dom'

import { IndustryForm, BusinessInfoForm, ContactInfoForm } from '../component'

export const QuoteFlowRoutes = (): JSX.Element => (
  <>
    <Route path='/industry'>
      <IndustryForm />
    </Route>
    <Route path='/businessinfo'>
      <BusinessInfoForm />
    </Route>
    <Route path='/contact'>
      <ContactInfoForm />
    </Route>
  </>
)
