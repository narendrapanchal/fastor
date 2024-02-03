import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();
export const AuthContextProvider = ({children}) => {
  const [authDetails, setAuthDetails]=useState({isAuth:false,token:""});
  function login(token){
    setAuthDetails({isAuth:true,token});
  }
  function logout(){
    setAuthDetails({isAuth:false,token:""})
  }

  let providerState = {authDetails,login,logout};
  return <AuthContext.Provider value={providerState}>
    {children}
  </AuthContext.Provider>
};