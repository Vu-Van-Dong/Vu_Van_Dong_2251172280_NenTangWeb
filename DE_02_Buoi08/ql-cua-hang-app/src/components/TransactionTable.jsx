import React from 'react';

function TransactionTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Hành động</th>
          <th>ID</th>
          <th>Khách hàng</th>
          <th>Nhân viên</th>
          <th>Số tiền</th>
          <th>Ngày mua</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr><td colSpan="6" style={{ textAlign: 'center' }}>Không có dữ liệu</td></tr>
        ) : (
          data.map((item) => (
            <tr key={item.id}>
              <td>X</td>
              <td>{item.id}</td>
              <td>{item.customer}</td>
              <td>{item.employee}</td>
              <td>{item.amount.toLocaleString()} đ</td>
              <td>{item.date}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default TransactionTable;
