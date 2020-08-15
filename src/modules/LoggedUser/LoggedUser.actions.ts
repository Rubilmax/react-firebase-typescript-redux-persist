import { createAction } from '@reduxjs/toolkit';

import { LoggedUser } from './LoggedUser.types';

export const updateLoggedUser = createAction<LoggedUser>('UPDATE_LOGGED_USER');
