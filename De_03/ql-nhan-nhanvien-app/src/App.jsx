import React, { useState } from 'react';
import './App.css';
import { FaPlus } from 'react-icons/fa';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, customer: 'Nguyễn Văn A', employee: 'Trần Thị B', amount: 1000000 },
    { id: 2, customer: 'Lê Văn C', employee: 'Phạm Thị D', amount: 2000000 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    customer: '',
    employee: '',
    amount: ''
  });

  const handleChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = () => {
    const newId = transactions.length + 1;
    setTransactions([...transactions, { id: newId, ...newTransaction }]);
    setNewTransaction({ customer: '', employee: '', amount: '' });
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1 className="title">Quản Lý Giao Dịch</h1>
      <button className="add-button" onClick={() => setShowModal(true)}>
        <FaPlus /> Thêm giao dịch
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Khách hàng</th>
            <th>Nhân viên</th>
            <th>Số tiền</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.customer}</td>
              <td>{item.employee}</td>
              <td>{parseInt(item.amount).toLocaleString()} VND</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
export default App;