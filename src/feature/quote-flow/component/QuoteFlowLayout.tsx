import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '@/component/Layout'

export default ({
  children,
  prevPath = undefined,
  nextPath = undefined
}: {
  children: React.ReactNode
  prevPath?: string
  nextPath?: string
}): JSX.Element => (
  <Layout>
    {children}
    <section>
      {
        prevPath !== undefined
          ? <Link to={prevPath}>Go Back</Link>
          : <a>Go Back</a>
      }
      {
        nextPath !== undefined
          ? <Link to={nextPath}>Next</Link>
          : <a>Next</a>
      }
    </section>
  </Layout>
)
