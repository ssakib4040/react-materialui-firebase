import { useContext, createContext, useEffect } from "react";

import "./App.css";
import { Link, Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./pages/Protected";
import Header from "./components/Header";
import NoMatch from "./pages/NoMatch";

import AuthProvider, { useAuth } from "./utils/AuthProvider";

export default function App() {
  const data = useAuth();

  return (
    <AuthProvider>
      <div>
        <Header />
        {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/protected">Protected</Link>
        </li>
      </ul> */}

        <Routes>
          <Route /*element={<Layout />}*/>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <Protected />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  console.log(auth);

  if (auth?.loading) {
    // If we're still loading the user from localStorage, then we don't know
    // whether or not they're authenticated, so we'll show a loading indicator.
    return <div>Loading...</div>;
  }

  if (!auth?.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
