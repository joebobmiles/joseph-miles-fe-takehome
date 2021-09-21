import React from 'react'

export const QuoteForm = (): JSX.Element => (
  <form>
    <section>
      <label htmlFor='business-name'>Business Name</label>
      <input type='text' id='business-name' />
    </section>
    <section>
      <label htmlFor='industry'>Industry</label>
      <select id='industry'>
        <option value={10537}>Plumber</option>
        <option value={10391}>Software developer</option>
        <option value={10415}>Lawyer</option>
        <option value={10109}>Handyman</option>
      </select>
    </section>
    <section>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' />
    </section>
    <section>
      <label htmlFor='annual-sales'>Annual Sales</label>
      <select id='annual-sales'>
        <option value={50}>$50k</option>
        <option value={75}>$75k</option>
        <option value={100}>$100k</option>
        <option value={150}>$150k</option>
        <option value={200}>$200k</option>
      </select>
    </section>
    <section>
      <label htmlFor='annual-payroll'>Annual Payroll</label>
      <select id='annual-payroll'>
        <option value={50}>$50k</option>
        <option value={75}>$75k</option>
        <option value={100}>$100k</option>
        <option value={150}>$150k</option>
        <option value={200}>$200k</option>
      </select>
    </section>
    <section>
      <label htmlFor='employee-headcount'>Number of Employees</label>
      <input type='number' id='employee-headcount' />
    </section>
    <section>
      <label htmlFor='zip-code'>Zip Code</label>
      <input type='text' id='zip-code' />
    </section>
  </form>
)
