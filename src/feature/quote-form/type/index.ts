interface Action<S extends string = string> {
  type: S
}

export type BusinessNameAction = SetBusinessNameAction

export type SetBusinessNameAction = Action<'set business name'> & {
  name: string
}
