/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";

const Context = createContext();

let initialUser = "";
export const StateContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkJwtExpiry = async () => {
      const token = JSON.parse(localStorage.getItem("userinfo"));
      if (token) {
        const { exp } = jwt_decode(token.access_token);
        if (exp * 1000 < Date.now()) {
          localStorage.removeItem("userinfo");
          location.replace("/");
          toast.error("Token expired, please sign in to get access");
        }
      }
    };
    checkJwtExpiry();
  }, []);

  //save user to local storage
  useEffect(() => {
    if (currentUser !== initialUser) {
      localStorage.setItem("userInfo", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  //retrive user from local storage
  useEffect(() => {
    const retriveUser = JSON.parse(localStorage.getItem("userInfo"));
    if (retriveUser) {
      setCurrentUser(retriveUser);
    }
  }, []);

  //logout User
  const logOut = () => {
    localStorage.removeItem("userInfo");
    location.replace("/");
    toast.success("Logged out successfully");
  };

  return (
    <Context.Provider
      value={{
        currentUser,
        setCurrentUser,
        logOut,
        show,
        setShow, 
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStore = () => useContext(Context);
