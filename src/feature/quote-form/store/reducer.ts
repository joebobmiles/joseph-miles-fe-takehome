import { combineReducers } from 'redux'
import { BusinessNameAction, ContactEmailAction } from '../type'

export const businessName = (action: BusinessNameAction): string => {
  switch (action.type) {
    case 'set business name':
      return action.name

    default:
      return ''
  }
}

export const contactEmail = (action: ContactEmailAction): string => {
  switch (action.type) {
    case 'set contact email':
      return action.email

    default:
      return ''
  }
}

export const reducer = combineReducers({
  businessName,
  contactEmail
})
