// TransactionForm.jsx
import React, { useState } from 'react';

const TransactionForm = ({ onAdd, onCancel }) => {
  const [customer, setCustomer] = useState('');
  const [employee, setEmployee] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !employee || !amount) return;
    onAdd({ customer, employee, amount });
  };

  return (
    <div className="modal">
      <h2>Thêm Giao Dịch</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tên khách hàng" value={customer} onChange={(e) => setCustomer(e.target.value)} />
        <input type="text" placeholder="Tên nhân viên" value={employee} onChange={(e) => setEmployee(e.target.value)} />
        <input type="number" placeholder="Số tiền" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <div className="form-buttons">
          <button type="submit">Thêm</button>
          <button type="button" onClick={onCancel}>Hủy</button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;