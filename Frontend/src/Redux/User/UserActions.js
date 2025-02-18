import { setEmail } from './UsersSlice';

export const setUserEmail = (email) => (dispatch) => {
  dispatch(setEmail(email));
  return;
};