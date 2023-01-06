import React, { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";

//Initial State
const initialState = {
  transactions: [],
};

//Create context
//To create context, you must Import createContext and initialize it:
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
