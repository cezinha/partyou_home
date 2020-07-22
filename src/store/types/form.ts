export interface IFormState {
  start: string
}

export enum FormType {
  CHANGE_START = "CHANGE_START"
}

interface IChangeStart {
  type: typeof FormType.CHANGE_START,
  start: string
}

export type FormActionsTypes = IChangeStart;