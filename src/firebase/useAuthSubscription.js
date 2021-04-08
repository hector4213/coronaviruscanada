import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Local dependencies
import { auth, createUserProfileDocument } from './firebase';
import { setCurrentUser } from '../redux/ducks/userSlice';

/* eslint-disable import/prefer-default-export */
export const useAuthSubscription = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Listen for auth state changes on component mount
    const unsubscribeFromAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // We can update our user if necessary
        createUserProfileDocument(authUser).then((userRef) => {
          userRef.onSnapshot((snapShot) => {
            dispatch(
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
              }),
            );
          });
        });
      } else {
        // Set it to null
        dispatch(setCurrentUser(authUser));
      }
    });
    return () => {
      // Unsubscribe on component unmount
      unsubscribeFromAuth();
    };
  }, []);
};
