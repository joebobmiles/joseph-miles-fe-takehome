import { combineReducers } from 'redux'
import { BusinessNameAction } from '../type'

export const businessName = (action: BusinessNameAction): string => {
  switch (action.type) {
    case 'set business name':
      return action.name

    default:
      return ''
  }
}

export const reducer = combineReducers({
  businessName
})
