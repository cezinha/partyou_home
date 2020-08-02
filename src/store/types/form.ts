export interface IFormState {
  name: string,
  email: string,
  cpf: string,
  birth: string,
  password: string,
  error: string,
  savedData: boolean
}

export enum FormType {
  CHANGE_EMAIL = "FORM_CHANGE_EMAIL",
  SUBMIT_STARTED = "FORM_SUBMIT_STARTED",
  SUBMIT_ERROR = "FORM_SUBMIT_ERROR",
  SUBMIT_COMPLETED = "FORM_SUBMIT_COMPLETED",
  RESET_DATA = "FORM_RESET_DATA"
}

interface IChangeEmail {
  type: typeof FormType.CHANGE_EMAIL,
  email: string
}

interface ISubmitStarted {
  type: typeof FormType.SUBMIT_STARTED,
  cpf: string,
  name: string,
  email: string,
  birth: string,
  password: string
}

interface IResetData {
  type: typeof FormType.RESET_DATA
}

interface ISubmitError {
  type: typeof FormType.SUBMIT_ERROR,
  error: string
}

interface ISubmitCompleted {
  type: typeof FormType.SUBMIT_COMPLETED
}

export type FormActionsTypes = IChangeEmail | ISubmitStarted | ISubmitError | ISubmitCompleted | IResetData;

