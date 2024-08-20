import { createContext, useReducer } from "react";
import AuthReducer from "./auth.reducer";
import React from "react";

const INITIAL_STATE = {
  user: {
    _id: "669e1411b12cc12466b757b3",
    username: "Khushi Dhiman",
    email: "khushi@gmail.com",
    password: "$2a$10$sUeqpG4Dnh9.Pke5SpmDMurpbWmMK1bTUgarYdXw6aVDtYgxGLFN.",
    profilePicture: "/assets/kiki.jpg",
    coverPicture: "",
    followers: Array(1),
    following: Array(3),
    desc: "Hello Guys! :) ",
    city: "Panipat (HR)",
    relationship: "single",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return React.createElement(
    AuthContext.Provider,
    {
      value: {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      },
    },
    children
  );
};
