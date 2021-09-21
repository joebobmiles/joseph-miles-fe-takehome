import React from 'react'

export const QuoteForm = (): JSX.Element => {
  const [businessName, setBusinessName] = React.useState('')
  const [contactEmail, setContactEmail] = React.useState('')
  const [grossAnnualSales, setGrossAnnualSales] = React.useState(0)
  const [annualPayroll, setAnnualPayroll] = React.useState(0)
  const [numEmployees, setNumEmployees] = React.useState(0)
  const [industryId, setIndustryId] = React.useState('')
  const [zip, setZip] = React.useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()

        console.log({
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
        })
      }}
    >
      <section>
        <label htmlFor='business-name'>Business Name</label>
        <input
          type='text'
          id='business-name'
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
          value={industryId}
          onChange={({ target }) => {
            setIndustryId((target as HTMLSelectElement).value)
          }}
        >
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
          value={grossAnnualSales}
          onChange={({ target }) => {
            setGrossAnnualSales(
              parseInt((target as HTMLSelectElement).value, 10) * 1000
            )
          }}
        >
          <option value={50}>$50k</option>
          <option value={75}>$75k</option>
          <option value={100}>$100k</option>
          <option value={150}>$150k</option>
          <option value={200}>$200k</option>
        </select>
      </section>
      <section>
        <label htmlFor='annual-payroll'>Annual Payroll</label>
        <select
          id='annual-payroll'
          value={annualPayroll}
          onChange={({ target }) => {
            setAnnualPayroll(
              parseInt((target as HTMLSelectElement).value, 10) * 1000
            )
          }}
        >
          <option value={50}>$50k</option>
          <option value={75}>$75k</option>
          <option value={100}>$100k</option>
          <option value={150}>$150k</option>
          <option value={200}>$200k</option>
        </select>
      </section>
      <section>
        <label htmlFor='employee-headcount'>Number of Employees</label>
        <input
          type='number'
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
