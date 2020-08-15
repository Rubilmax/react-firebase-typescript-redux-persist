import { LoggedUser } from './LoggedUser.types';

export const loggedUserFixture: LoggedUser = {
  displayName: 'Romain Milon',
  email: 'rmilon@gmail.com',
  emailVerified: true,
  photoURL: '',
  uid: '1',
  logged: true,
};

export const defaultLoggedUserFixture: LoggedUser = {
  logged: false,
};
