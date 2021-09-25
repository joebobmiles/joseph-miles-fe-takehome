import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import QuoteFlowLayout from '../component/QuoteFlowLayout'

import { BusinessInfo } from './BusinessInfo'
import { Contact } from './Contact'
import { Industry } from './Industry'
import { Result } from './Result'

const routes = [
  {
    path: '/industry',
    component: Industry
  },
  {
    path: '/businessinfo',
    component: BusinessInfo
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/result',
    component: Result
  }
]

export const QuoteFlowRoutes = (): JSX.Element => (
  <>
    {
      routes.map((route, i, routes) => (
        <Route key={i} path={route.path}>
          <QuoteFlowLayout
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            prevPath={(i - 1) > -1 ? routes.at(i - 1)!.path : undefined}
            nextPath={routes.at(i + 1)?.path}
          >
            <route.component />
          </QuoteFlowLayout>
        </Route>
      ))
    }
    <Route path='*'>
      <Redirect to='/industry' />
    </Route>
  </>
)
