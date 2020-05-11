import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    }
    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add A New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to describe a transaction..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount<br />
            (Enter minus (-) before an expense and plus (+) before a payment)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <button className="btn">Add This Transaction</button>
        </div>
      </form>
    </div>
  );
};
