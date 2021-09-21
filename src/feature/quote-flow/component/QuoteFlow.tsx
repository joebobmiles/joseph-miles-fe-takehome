import React from 'react'
import { PARTNER_TOKEN } from '@/config'

export const QuoteFlow = (): JSX.Element => {
  const [businessName, setBusinessName] = React.useState('')
  const [contactEmail, setContactEmail] = React.useState('')
  const [grossAnnualSales, setGrossAnnualSales] = React.useState(0)
  const [annualPayroll, setAnnualPayroll] = React.useState(0)
  const [numEmployees, setNumEmployees] = React.useState(0)
  const [industryId, setIndustryId] = React.useState('')
  const [zip, setZip] = React.useState('')

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        e.stopPropagation()

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

        const response = await fetch(
          'https://api-sandbox.coterieinsurance.com/v1/commercial/applications',
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `token ${PARTNER_TOKEN}`
            },
            body: JSON.stringify(formData)
          }
        ).then(async (response): Promise<any> => await response.json())

        console.log(response)
      }}
    >
      <section>
        <label htmlFor='business-name'>Business Name</label>
        <input
          type='text'
          id='business-name'
          required
          value={businessName}
          onChange={({ target }) => {
            setBusinessName((target as HTMLInputElement).value)
          }}
        />
      </section>
      <section>
        <label htmlFor='industry'>Industry</label>
        <select
          id='industry'
          required
          value={industryId}
          onChange={({ target }) => {
            setIndustryId((target as HTMLSelectElement).value)
          }}
        >
          <option value={0} hidden />
          <option value={10537}>Plumber</option>
          <option value={10391}>Software developer</option>
          <option value={10415}>Lawyer</option>
          <option value={10109}>Handyman</option>
        </select>
      </section>
      <section>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          required
          value={contactEmail}
          onChange={({ target }) => {
            setContactEmail((target as HTMLInputElement).value)
          }}
        />
      </section>
      <section>
        <label htmlFor='annual-sales'>Annual Sales</label>
        <select
          id='annual-sales'
          required
          value={grossAnnualSales}
          onChange={({ target }) => {
            setGrossAnnualSales(
              parseInt((target as HTMLSelectElement).value, 10)
            )
          }}
        >
          <option value={0} hidden>$0</option>
          <option value={50000}>$50k</option>
          <option value={75000}>$75k</option>
          <option value={100000}>$100k</option>
          <option value={150000}>$150k</option>
          <option value={200000}>$200k</option>
        </select>
      </section>
      <section>
        <label htmlFor='annual-payroll'>Annual Payroll</label>
        <select
          id='annual-payroll'
          required
          value={annualPayroll}
          onChange={({ target }) => {
            setAnnualPayroll(
              parseInt((target as HTMLSelectElement).value, 10)
            )
          }}
        >
          <option value={0} hidden>$0</option>
          <option value={50000}>$50k</option>
          <option value={75000}>$75k</option>
          <option value={100000}>$100k</option>
          <option value={150000}>$150k</option>
          <option value={200000}>$200k</option>
        </select>
      </section>
      <section>
        <label htmlFor='employee-headcount'>Number of Employees</label>
        <input
          type='number'
          required
          id='employee-headcount'
          value={numEmployees}
          onChange={({ target }) => {
            setNumEmployees(
              parseInt((target as HTMLInputElement).value, 10)
            )
          }}
        />
      </section>
      <section>
        <label htmlFor='zip-code'>Zip Code</label>
        <input
          type='text'
          id='zip-code'
          required
          value={zip}
          onChange={({ target }) => {
            setZip((target as HTMLInputElement).value)
          }}
        />
      </section>
      <section>
        <button type='submit'>Get your quote!</button>
      </section>
    </form>
  )
}
