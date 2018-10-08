import { EnthusiasmAction } from '../actions';
import { IStoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';
const initialState = {
   enthusiasmLevel: 5,
   languageName :"marvis",
}

export function enthusiasm(state = initialState, action: EnthusiasmAction): IStoreState {
  switch(action.type) {
    case INCREMENT_ENTHUSIASM:
      return {
        ...state,
         enthusiasmLevel: state.enthusiasmLevel + 1,
      }
    case DECREMENT_ENTHUSIASM: 
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel - 1,
      }
    default:
      return state;
  }
}