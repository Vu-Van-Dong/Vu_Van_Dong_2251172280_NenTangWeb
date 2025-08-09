import React from "react";

function StudentTable({ students, deleteStudent, startEdit }) {
  return (
    <div className="table-section">
      <h2>Danh sách Sinh viên</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>STT</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Lớp</th>
            <th>Email</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">Không có sinh viên</td>
            </tr>
          ) : (
            students.map((sv, index) => (
              <tr key={sv.id}>
                <td>{index + 1}</td>
                <td>{sv.name}</td>
                <td>{sv.dob}</td>
                <td>{sv.gender}</td>
                <td>{sv.className}</td>
                <td>{sv.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => startEdit(sv)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteStudent(sv.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
