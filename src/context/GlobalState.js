import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Peanut Butter", amount: -2.59 },
    { id: 2, text: "Salary", amount: 1500 },
    { id: 3, text: "New Phone", amount: -500 },
    { id: 4, text: "Lunch", amount: -12.37 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
    { children }
    </GlobalContext.Provider>
  );
}