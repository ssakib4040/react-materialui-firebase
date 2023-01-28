import { createContext, useState, useContext } from "react";

let AuthContext = createContext({ loading: false, user: null });

export default function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

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
