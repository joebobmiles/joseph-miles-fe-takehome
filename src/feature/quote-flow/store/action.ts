import { SetBusinessNameAction } from '../type'

export const setBusinessName = (name: string): SetBusinessNameAction => ({
  type: 'set business name',
  name
})
