import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/type'

import { setIndustryId } from '../store/action'

export const IndustryForm = (): JSX.Element => {
  const industryId = useSelector<RootState, string>(
    ({ quoteFlow: { industryId } }) => industryId
  )

  const dispatch = useDispatch()

  return (
    <section>
      <label htmlFor='industry'>Industry</label>
      <select
        id='industry'
        required
        value={industryId}
        onChange={({ target }) => {
          dispatch(setIndustryId((target as HTMLSelectElement).value))
        }}
      >
        <option value={0} hidden />
        <option value={10537}>Plumber</option>
        <option value={10391}>Software developer</option>
        <option value={10415}>Lawyer</option>
        <option value={10109}>Handyman</option>
      </select>
    </section>
  )
}
