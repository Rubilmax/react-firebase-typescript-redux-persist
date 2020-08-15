import { defaultLoggedUserFixture } from './LoggedUser/LoggedUser.fixtures';

import { RootState } from './reducers';

export const stateFixture: RootState = {
  loggedUser: defaultLoggedUserFixture,
};
