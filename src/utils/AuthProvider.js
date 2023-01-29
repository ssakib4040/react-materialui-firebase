// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "../utils/firebase";

let AuthContext = createContext({ loading: false, user: null });

export default function AuthProvider({ children }) {
  let [user, setUser] = useState({ loading: true, user: null });

  useEffect(() => {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ loading: false, user: user });
      } else {
        setUser({ loading: false, user: null });
      }
    });
  }, []);

  let signin = (newUser, callback) => {
    // return fakeAuthProvider.signin(() => {
    //   setUser(newUser);
    //   callback();
    // });
  };

  let signout = (callback) => {
    // return fakeAuthProvider.signout(() => {
    //   setUser(null);
    //   callback();
    // });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
