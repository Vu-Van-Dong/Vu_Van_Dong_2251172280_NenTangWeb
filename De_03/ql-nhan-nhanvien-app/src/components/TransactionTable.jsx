function TransactionTable({ data }) {
  return (
    <table className="table table-bordered bg-white mt-3">
      <thead>
        <tr>
          <th></th>
          <th>Hành động</th>
          <th>STT</th>
          <th>Tên</th>
          <th>Họ đệm</th>
          <th>Địa chỉ</th>
          <th>Hoạt động</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td>
              <button className="btn btn-outline-dark btn-sm">
                <i className="bi bi-caret-down-fill"></i>
              </button>
            </td>
            <td className="action-icons">
              <button className="btn-action view"><i className="fa fa-eye"></i></button>
              <button className="btn-action edit"><i className="fa fa-pen"></i></button>
              <button className="btn-action delete"><i className="fa fa-times"></i></button>
            </td>
            <td>{index + 1}</td>
            <td>{row.ten}</td>
            <td>{row.hoDem}</td>
            <td>{row.diaChi}</td>
            <td>
              <div className="border border-secondary rounded py-1 text-start ps-2">
                <i className={`bi fs-5 ${row.hoatDong ? "bi-check-lg text-success" : "bi-x-lg text-danger"}`}></i>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
