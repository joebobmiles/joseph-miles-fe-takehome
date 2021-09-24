import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '@/type'
import {
  setBusinessName,
  setGrossAnnualSales,
  setAnnualPayroll,
  setNumEmployees,
  setZip
} from '../store/action'

export const BusinessInfoForm = (): JSX.Element => {
  const {
    businessName,
    grossAnnualSales,
    annualPayroll,
    numEmployees,
    zip
  } = useSelector<RootState, {
    businessName: string
    grossAnnualSales: number
    annualPayroll: number
    numEmployees: number
    zip: string
  }>(
    ({
      quoteFlow: {
        businessName,
        grossAnnualSales,
        annualPayroll,
        numEmployees,
        zip
      }
    }) => ({
      businessName,
      grossAnnualSales,
      annualPayroll,
      numEmployees,
      zip
    })
  )

  const dispatch = useDispatch()

  return (
    <>
      <section>
        <label htmlFor='business-name'>Business Name</label>
        <input
          type='text'
          id='business-name'
          required
          value={businessName}
          onChange={({ target }) => {
            dispatch(setBusinessName((target as HTMLInputElement).value))
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
            dispatch(setGrossAnnualSales(
              parseInt((target as HTMLSelectElement).value, 10)
            ))
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
            dispatch(setAnnualPayroll(
              parseInt((target as HTMLSelectElement).value, 10)
            ))
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
            dispatch(setNumEmployees(
              parseInt((target as HTMLInputElement).value, 10)
            ))
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
            dispatch(setZip((target as HTMLInputElement).value))
          }}
        />
      </section>
    </>
  )
}
