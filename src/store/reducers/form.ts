import {
  IFormState, FormActionsTypes, FormType
} from "../types/form";

const initialState : IFormState = {
  start: ""
};

export function formReducer(state = initialState, action: FormActionsTypes) : IFormState {
  switch (action.type) {
    case FormType.CHANGE_START:
      return {
        ...state,
        start: action.start
      }
    default:
      return state;
  }
}