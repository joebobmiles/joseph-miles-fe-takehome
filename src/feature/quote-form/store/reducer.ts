import { combineReducers } from 'redux'
import {
  BusinessNameAction,
  ContactEmailAction,
  AnnualSalesAction
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

export const reducer = combineReducers({
  businessName,
  contactEmail,
  grossAnnualSales
})
