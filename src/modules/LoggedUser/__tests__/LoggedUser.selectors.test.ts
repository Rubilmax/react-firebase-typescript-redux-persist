import { cloneDeep } from 'lodash';

import { stateFixture } from 'modules/state.fixtures';
import { selectLoggedUser } from '../LoggedUser.selectors';
import { loggedUserFixture } from '../LoggedUser.fixtures';

describe('LoggedUser selectors', () => {
  const initialState = {
    ...cloneDeep(stateFixture),
    loggedUser: { ...loggedUserFixture },
  };

  describe('selectLoggedUser function', () => {
    it('should return the loggedUser in state', () => {
      expect(selectLoggedUser(initialState)).toEqual(loggedUserFixture);
    });
  });
});
