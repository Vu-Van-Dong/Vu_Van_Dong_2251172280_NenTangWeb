// Hiển thị bảng dữ liệu
export default function TransactionTable({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>X</th>
          <th>Hành động</th>
          <th>ID</th>
          <th>Khách hàng</th>
          <th>Nhân viên</th>
          <th>Số tiền</th>
          <th>Ngày mua</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="delete-col">×</td>
            <td className="action-icons">
              <button className="btn-action view"><i className="fa fa-eye"></i></button>
              <button className="btn-action edit"><i className="fa fa-pen"></i></button>
              <button className="btn-action delete"><i className="fa fa-times"></i></button>
            </td>
            <td>{item.id}</td>
            <td>{item.khachHang}</td>
            <td>{item.nhanVien}</td>
            <td>{item.soTien.toLocaleString()}</td>
            <td>{item.ngayMua}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
