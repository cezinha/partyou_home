import { FormActionsTypes, FormType } from '../types/form';

export function changeStart(start: string): FormActionsTypes {
  return {
      type: FormType.CHANGE_START,
      start: start
  };
}
