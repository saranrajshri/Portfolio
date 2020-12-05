import React, { useReducer, createContext } from "react";
export const Context = createContext();

// Global State
const initialState = {
  socialMediaLinks: {
    resume: "#",
    linkedIn: "http://linkedin.com/in/saranrajshri",
    github: "http://github.com/saranrajshri",
    leetCode: "",
    codeChef: "",
    hackerRank: "",
    email: "shrisaranraj2001@gmail.com",
  },
};

// Reducers
const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error();
  }
};

// Context Provider
export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
