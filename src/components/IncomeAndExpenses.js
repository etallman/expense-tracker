import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeAndExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item=> item <0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-gained" className="money-gained">{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-lost" className="money-lost">{expense}</p>
      </div>
    </div>
  )
};
