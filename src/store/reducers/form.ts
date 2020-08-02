import {
  IFormState, FormActionsTypes, FormType
} from "../types/form";

const initialState : IFormState = {
  email: "",
  name: "",
  cpf: "",
  birth: "",
  password: "",
  error: "",
  savedData: false
};

export function formReducer(state = initialState, action: FormActionsTypes) : IFormState {
  switch (action.type) {
    case FormType.CHANGE_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case FormType.SUBMIT_STARTED:
      return {
        ...state,
        cpf: action.cpf,
        name: action.name,
        email: action.email,
        birth: action.birth,
        error: "",
        savedData: false
      };
    case FormType.SUBMIT_ERROR:
      return {
        ...state,
        error: action.error,
        savedData: false
      };
    case FormType.SUBMIT_COMPLETED:
      return {
        ...state,
        error: "",
        cpf: "",
        name: "",
        email: "",
        birth: "",
        savedData: true
      }
    case FormType.RESET_DATA:
      return {
        ...state,
        error: "",
        cpf: "",
        name: "",
        email: "",
        birth: "",
        savedData: false
      }
    default:
      return state;
  }
}
