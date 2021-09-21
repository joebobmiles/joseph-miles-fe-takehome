import { combineReducers } from 'redux'
import {
  BusinessNameAction,
  ContactEmailAction,
  AnnualSalesAction,
  AnnualPayrollAction,
  NumEmployeesAction,
  IndustryIdAction,
  ZipAction
} from '../type'

export const businessName = (
  state: string = '', // eslint-disable-line @typescript-eslint/default-param-last
  action: BusinessNameAction
): string => {
  switch (action.type) {
    case 'set business name':
      return action.name

    default:
      return state
  }
}

export const contactEmail = (
  state: string = '', // eslint-disable-line @typescript-eslint/default-param-last
  action: ContactEmailAction
): string => {
  switch (action.type) {
    case 'set contact email':
      return action.email

    default:
      return state
  }
}

export const grossAnnualSales = (
  state: number = 0, // eslint-disable-line @typescript-eslint/default-param-last
  action: AnnualSalesAction
): number => {
  switch (action.type) {
    case 'set gross annual sales':
      return action.sales

    default:
      return state
  }
}

export const annualPayroll = (
  state: number = 0, // eslint-disable-line @typescript-eslint/default-param-last
  action: AnnualPayrollAction
): number => {
  switch (action.type) {
    case 'set annual payroll':
      return action.payroll

    default:
      return state
  }
}

export const numEmployees = (
  state: number = 0, // eslint-disable-line @typescript-eslint/default-param-last
  action: NumEmployeesAction
): number => {
  switch (action.type) {
    case 'set number of employees':
      return action.employees

    default:
      return state
  }
}

export const industryId = (
  state: string = '', // eslint-disable-line @typescript-eslint/default-param-last
  action: IndustryIdAction
): string => {
  switch (action.type) {
    case 'set industry id':
      return action.id

    default:
      return state
  }
}

export const zip = (
  state: string = '', // eslint-disable-line @typescript-eslint/default-param-last
  action: ZipAction
): string => {
  switch (action.type) {
    case 'set zip':
      return action.zip

    default:
      return state
  }
}

export const reducer = combineReducers({
  businessName,
  contactEmail,
  grossAnnualSales,
  annualPayroll,
  numEmployees,
  industryId,
  zip
})
