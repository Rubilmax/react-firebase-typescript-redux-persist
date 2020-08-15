import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'modules/store';
import { firebase, openFirebaseUI } from 'modules/firebase';
import { selectLoggedUser } from 'modules/LoggedUser/LoggedUser.selectors';
import { updateLoggedUser } from 'modules/LoggedUser/LoggedUser.actions';
import { LoggedUser } from 'modules/LoggedUser/LoggedUser.types';

const App = () => {
  const [firebaseUIOpened, setFirebaseUIOpened] = useState(false);
  const user = useSelector(selectLoggedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      if (user) {
        const { displayName, email, emailVerified, photoURL, uid } = user as LoggedUser;
        dispatch(
          updateLoggedUser({
            displayName,
            email,
            emailVerified,
            photoURL,
            uid,
            logged: true,
          }),
        );
      } else dispatch(updateLoggedUser({ logged: false }));
    });
  }, []);

  const balances = {
    dSmldEksdncDL: {
      name: 'Balance active',
      status: 'active',
      members: {
        sEmalNBdlsLEemQlsz: 'Romain',
        HgtDxnSwxPommeldikF: 'Marie',
      },
      distributions: {
        SgTfkmmelDoziTjJ: {
          name: 'Répartition équitable',
          shares: {
            sEmalNBdlsLEemQlsz: 1,
            HgtDxnSwxPommeldikF: 1,
          },
        },
      },
    },
    RtYeujjdLakmeoSs: {
      name: 'Balance bloquée',
      status: 'locked',
      members: {
        sEmalNBdlsLEemQlsz: 'Romain',
        HgtDxnSwxPommeldikF: 'Marie',
      },
    },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {user.logged ? (
          'You are logged in!'
        ) : (
          <button onClick={() => setFirebaseUIOpened(true)}>Login</button>
        )}
        {firebaseUIOpened && openFirebaseUI()}
      </PersistGate>
    </Provider>
  );
};

export default App;
