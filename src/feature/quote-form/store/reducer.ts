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

export const businessName = (state: string, action: BusinessNameAction): string => {
  switch (action.type) {
    case 'set business name':
      return action.name

    default:
      return state
  }
}

export const contactEmail = (state: string, action: ContactEmailAction): string => {
  switch (action.type) {
    case 'set contact email':
      return action.email

    default:
      return state
  }
}

export const grossAnnualSales = (state: number, action: AnnualSalesAction): number => {
  switch (action.type) {
    case 'set gross annual sales':
      return action.sales

    default:
      return state
  }
}

export const annualPayroll = (state: number, action: AnnualPayrollAction): number => {
  switch (action.type) {
    case 'set annual payroll':
      return action.payroll

    default:
      return state
  }
}

export const numEmployees = (state: number, action: NumEmployeesAction): number => {
  switch (action.type) {
    case 'set number of employees':
      return action.employees

    default:
      return state
  }
}

export const industryId = (state: string, action: IndustryIdAction): string => {
  switch (action.type) {
    case 'set industry id':
      return action.id

    default:
      return state
  }
}

export const zip = (state: string, action: ZipAction): string => {
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
