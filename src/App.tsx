import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { firebase, openFirebaseUI } from 'modules/firebase';
import { selectLoggedUser } from 'modules/LoggedUser/LoggedUser.selectors';
import { updateLoggedUser } from 'modules/LoggedUser/LoggedUser.actions';
import { LoggedUser } from 'modules/LoggedUser/LoggedUser.types';

import './App.css';

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

  return (
    <div className="App">
      {user.logged ? (
        'You are logged in!'
      ) : (
        <button onClick={() => setFirebaseUIOpened(true)}>Login</button>
      )}
      {firebaseUIOpened && openFirebaseUI()}
    </div>
  );
};

export default App;
