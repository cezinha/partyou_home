import { FormActionsTypes, FormType } from '../types/form';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import settings from '../../settings.json';
import axios from 'axios';

export function changeEmail(email: string): FormActionsTypes {
  return {
      type: FormType.CHANGE_EMAIL,
      email: email
  };
}

export function submitStarted(cpf: string, name: string, birth: string, email: string, password: string): FormActionsTypes {
  return {
    type: FormType.SUBMIT_STARTED,
    cpf: cpf,
    name: name,
    email: email,
    birth: birth,
    password: password
  };
}

export function resetFormAction(): FormActionsTypes {
  return {
    type: FormType.RESET_DATA
  };
}

export function submitError(error: string): FormActionsTypes {
  return {
    type: FormType.SUBMIT_ERROR,
    error: error
  };
}

export function submitCompleted(): FormActionsTypes {
  return {
    type: FormType.SUBMIT_COMPLETED
  };
}

export const thunkSubmitForm = (cpf: string, name: string, birth: string, email: string, password: string, callback: Function): ThunkAction<void, RootState, unknown, FormActionsTypes> => async (dispatch, getState) => {
  dispatch(submitStarted(cpf, name, birth, email, password));
  try {
      axios.post(`${settings.API_URL}/user/add`, {
        cpf: cpf,
        name: name,
        email: email,
        birth: birth,
        password: password
      })
      .then(res => {
          //check is correct
          //const data = res.data;
          //if (data.success) {
            dispatch(submitCompleted());
            callback(); // clean form field
          //}
      })
      .catch((err) => {
          dispatch(submitError(String(err)));
      });
  } catch (err) {
      dispatch(submitError(String(err)));
  }
}
