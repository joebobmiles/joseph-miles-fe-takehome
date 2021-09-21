import {
  SetBusinessNameAction,
  SetContactEmailAction,
  SetAnnualSalesAction,
  SetAnnualPayrollAction,
  SetNumEmployeesAction,
  SetIndustryIdAction,
  SetZipAction
} from '../type'

export const setBusinessName = (name: string): SetBusinessNameAction => ({
  type: 'set business name',
  name
})

export const setContactEmail = (email: string): SetContactEmailAction => ({
  type: 'set contact email',
  email
})

export const setGrossAnnualSales = (sales: number): SetAnnualSalesAction => ({
  type: 'set gross annual sales',
  sales
})

export const setAnnualPayroll = (payroll: number): SetAnnualPayrollAction => ({
  type: 'set annual payroll',
  payroll
})

export const setNumEmployees = (employees: number): SetNumEmployeesAction => ({
  type: 'set number of employees',
  employees
})

export const setIndustryId = (id: string): SetIndustryIdAction => ({
  type: 'set industry id',
  id
})

export const setZip = (zip: string): SetZipAction => ({
  type: 'set zip',
  zip
})
