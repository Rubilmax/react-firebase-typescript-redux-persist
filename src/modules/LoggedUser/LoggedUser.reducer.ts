import { createReducer } from '@reduxjs/toolkit';

import { updateLoggedUser } from './LoggedUser.actions';
import { LoggedUser } from './LoggedUser.types';

const initialState: LoggedUser = {
  logged: false,
} as LoggedUser;

export default createReducer<LoggedUser>(initialState, {
  [updateLoggedUser.type]: (state: LoggedUser, action: ReturnType<typeof updateLoggedUser>) =>
    action.payload,
});
