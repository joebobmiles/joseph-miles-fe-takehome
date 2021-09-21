import { combineReducers } from 'redux'
import { BusinessNameAction, ContactEmailAction } from '../type'

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

export const reducer = combineReducers({
  businessName,
  contactEmail
})
