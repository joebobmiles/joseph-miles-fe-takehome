interface Action<S extends string = string> {
  type: S
}

export type BusinessNameAction = SetBusinessNameAction

export type SetBusinessNameAction = Action<'set business name'> & {
  name: string
}

export type ContactEmailAction = SetContactEmailAction

export type SetContactEmailAction = Action<'set contact email'> & {
  email: string
}

export type AnnualSalesAction = SetAnnualSalesAction

export type SetAnnualSalesAction = Action<'set gross annual sales'> & {
  sales: number
}

export type AnnualPayrollAction = SetAnnualPayrollAction

export type SetAnnualPayrollAction = Action<'set annual payroll'> & {
  payroll: number
}

export type NumEmployeesAction = SetNumEmployeesAction

export type SetNumEmployeesAction = Action<'set number of employees'> & {
  employees: number
}

export type IndustryIdAction = SetIndustryIdAction

export type SetIndustryIdAction = Action<'set industry id'> & {
  id: string
}

export type ZipAction = SetZipAction

export type SetZipAction = Action<'set zip'> & {
  zip: string
}
