// src/components/ProductList.jsx
export default function ProductList({ products, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>X</th>
          <th>Hành động</th>
          <th>Mã</th>
          <th>Khách hàng</th>
          <th>Nhân viên</th>
          <th>Số tiền</th>
          <th>Ngày tạo</th>
        </tr>
      </thead>
      <tbody>
        {products.map((sp, index) => (
          <tr key={sp.id}>
            <td className="delete-col" onClick={() => onDelete(index)}>×</td>
            <td className="action-icons">
              <button className="btn-action view"><i className="fa fa-eye"></i></button>
              <button className="btn-action edit"><i className="fa fa-pen"></i></button>
              <button className="btn-action delete"><i className="fa fa-times"></i></button>
            </td>
            <td>{sp.id}</td>
            <td>{sp.khachHang}</td>
            <td>{sp.nhanVien}</td>
            <td>{sp.soTien.toLocaleString()}</td>
            <td>{sp.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
