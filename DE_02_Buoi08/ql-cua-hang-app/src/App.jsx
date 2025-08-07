import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [transactions, setTransactions] = useState(data);
  const [search, setSearch] = useState('');

  const filteredData = transactions.filter(tran =>
    tran.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <span>Trường Đại học Thủy lợi</span>
        <div className="nav-right">
          <a href="#">Trang chủ</a>
          <a href="#">Quản lý đơn hàng</a>
          <input type="text" placeholder="Nhập nội dung tìm kiếm" />
          <button>Tìm kiếm</button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <button className="add">+ THÊM</button>
        <button className="export">📁 XUẤT RA FILE</button>
        <input
          type="text"
          placeholder="Tìm kiếm giao dịch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="transaction-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Hành động</th>
            <th>ID</th>
            <th>Khách hàng</th>
            <th>Nhân viên</th>
            <th>Số tiền</th>
            <th>Ngày mua</th>
            <th>Kết quả</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((tran, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>
                <button className="edit">✎</button>
                <button className="delete">🗑</button>
              </td>
              <td>{tran.id}</td>
              <td>{tran.customer}</td>
              <td>{tran.staff}</td>
              <td>{tran.amount.toLocaleString()}</td>
              <td>{tran.date}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete button */}
      <button className="delete-selected">DELETE SELECTED RECORDS</button>

      {/* Pagination */}
      <div className="pagination">
        <span>Trang</span>
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page">4</button>
        <span>Kết quả 1 trong 20 trang</span>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>TRƯỜNG ĐẠI HỌC THỦY LỢI</p>
        <p>Địa chỉ: 175 Tây Sơn, Đống Đa, Hà Nội</p>
        <p>Điện thoại: (024) 38522201 - Fax: (024) 35633351</p>
        <p>Email: phongctsv@tlu.edu.vn</p>
      </div>
    </div>
  );
}

export default App;
