import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom'

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
          <route.component />
          <section>
            {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              <Link to={(i - 1) > -1 ? routes.at(i - 1)!.path : ''}>
                Go Back
              </Link>
            }
            {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              <Link to={(i + 1) < routes.length ? routes.at(i + 1)!.path : ''}>
                Next
              </Link>
            }
          </section>
        </Route>
      ))
    }
    <Route path='*'>
      <Redirect to='/industry' />
    </Route>
  </>
)
