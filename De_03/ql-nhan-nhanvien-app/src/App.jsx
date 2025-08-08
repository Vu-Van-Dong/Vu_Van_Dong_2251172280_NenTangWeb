import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import TransactionTable from "./components/TransactionTable";
import AddModal from "./components/AddModal";
import { initialTransactions } from "./data";
import './App.css'; // Nhớ viết đúng tên file và đúng vị trí
import TransactionForm from "./components/TransactionForm";
function App() {
  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = (newData) => {
    const newTransaction = {
      id: transactions.length + 1,
      ...newData,
      hoatDong: true
    };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="app">
      <Header />
      <main className="container mt-3">
        <Toolbar />
        <TransactionTable data={transactions} />
      </main>
      <AddModal onAdd={addTransaction} />
    </div>
  );
}

export default App;
