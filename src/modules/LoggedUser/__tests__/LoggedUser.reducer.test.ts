import { cloneDeep } from 'lodash';

import reducer from '../LoggedUser.reducer';
import { updateLoggedUser } from '../LoggedUser.actions';
import { loggedUserFixture, defaultLoggedUserFixture } from '../LoggedUser.fixtures';

describe('[Reducer] LoggedUser', () => {
  it('should handle updateLoggedUser', () => {
    const initialState = { ...cloneDeep(defaultLoggedUserFixture) };
    const action = updateLoggedUser({ ...cloneDeep(loggedUserFixture) });
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(loggedUserFixture);
  });
});
