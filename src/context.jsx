/* eslint-disable react/prop-types */
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import vivek from "./assets/vivek1.jpg"

// ruls of use context
// create context 
// Provider
// consumer


const AppContext = React.createContext();



const intialState = {
  name: "",
  image: "",
  
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "The Vivek Pandey",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Vivek Pandey",
        image: vivek,
      },
    });
  };

 

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
