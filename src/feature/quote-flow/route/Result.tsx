import React from 'react'
import { useSelector } from 'react-redux'

import { PARTNER_TOKEN } from '@/config'
import { RootState } from '@/type'

const policyTypeMap: { [_: string]: string } = {
  GL: 'General Liability',
  PL: 'Professional Liability',
  BOP: 'Business Owner\'s Policy'
}

export const Result = (): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [response, setResponse] = React.useState<any>({})

  const {
    businessName,
    contactEmail,
    grossAnnualSales,
    annualPayroll,
    numEmployees,
    industryId,
    zip
  } = useSelector<RootState, {
    businessName: string
    contactEmail: string
    grossAnnualSales: number
    annualPayroll: number
    numEmployees: number
    industryId: string
    zip: string
  }>(
    ({
      quoteFlow: {
        businessName,
        contactEmail,
        grossAnnualSales,
        annualPayroll,
        numEmployees,
        industryId,
        zip
      }
    }) =>
      ({
        businessName,
        contactEmail,
        grossAnnualSales,
        annualPayroll,
        numEmployees,
        industryId,
        zip
      })
  )

  React.useEffect(
    () => {
      const formData = {
        businessName,
        contactEmail,
        grossAnnualSales,
        annualPayroll,
        numEmployees,
        industryId,
        locations: [
          {
            zip
          }
        ]
      }

      const controller = new AbortController()

      void fetch( // eslint-disable-line no-void
        'https://api-sandbox.coterieinsurance.com/v1/commercial/applications',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${PARTNER_TOKEN}`
          },
          body: JSON.stringify(formData),
          signal: controller.signal
        }
      )
        .then(async (response): Promise<any> => await response.json())
        .then((response) => {
          setResponse(response)
          setIsLoading(false)
        })

      return () => {
        // If the component unmounts, abort the fetch request.
        controller.abort()
      }
    },
    []
  )

  return (
    isLoading
      ? (<p>Loading...</p>)
      : (
        response.isSuccess === false
          ? <p>There is an error in your form.</p>
          : (
            response.availablePolicyTypes.length === 0
              ? <p>You do not qualify for any policy types.</p>
              : (
                  <>
                    <p>You have the available policy types:</p>
                    <ul>
                      {
                        response.availablePolicyTypes.map(
                          (type: string, i: number) =>
                            <li key={i}>
                              {policyTypeMap[type]}
                            </li>
                        )
                      }
                    </ul>
                  </>
                )
            )
      )
  )
}
