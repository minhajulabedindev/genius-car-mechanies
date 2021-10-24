import React, { createContext } from "react";
import useHooks from "../Hooks/useHooks";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useHooks();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
