import React from 'react'

import Layout from '@/component/Layout'

export default ({ children }: { children: React.ReactNode }): JSX.Element => (
  <Layout>
    {children}
  </Layout>
)
