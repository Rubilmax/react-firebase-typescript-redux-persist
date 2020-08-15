import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loggedUserReducer from './LoggedUser/LoggedUser.reducer';

const rootReducer = combineReducers({
  loggedUser: loggedUserReducer,
});

/*const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
);*/

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
