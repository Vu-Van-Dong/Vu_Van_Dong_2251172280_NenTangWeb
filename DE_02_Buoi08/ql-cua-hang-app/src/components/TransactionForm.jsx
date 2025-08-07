// src/components/TransactionForm.jsx
import React, { useState } from "react";

function TransactionForm({ onAdd }) {
  const [customer, setCustomer] = useState("");
  const [employee, setEmployee] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !employee || !amount) return;
    onAdd({ customer, employee, amount: parseInt(amount) });
    setCustomer("");
    setEmployee("");
    setAmount("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Khách hàng"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nhân viên"
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
      />
      <input
        type="number"
        placeholder="Số tiền"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Thêm</button>
    </form>
  );
}

export default TransactionForm;
