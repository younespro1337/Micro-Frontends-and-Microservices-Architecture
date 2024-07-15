// src/actions/inputAction.js
import { setInputValue } from '../reducers/inputReducer';

export const updateInputValue = (value) => (dispatch) => {
  dispatch(setInputValue(value));
};
