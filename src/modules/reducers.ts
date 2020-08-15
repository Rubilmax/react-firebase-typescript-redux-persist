import { combineReducers } from 'redux';

import loggedUserReducer from './LoggedUser/LoggedUser.reducer';

const rootReducer = combineReducers({
  loggedUser: loggedUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
