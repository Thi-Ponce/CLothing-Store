import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocFromAuth } from '../utils/firebase/firebade.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
