import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, updateStudent }) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    dob: "",
    gender: "",
    className: "",
    email: ""
  });

  // Neu co editStudent thi do du lieu len form
  useEffect(() => {
    if (editStudent) {
      setFormData(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.dob || !formData.gender || !formData.className || !formData.email) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (formData.id) {
      // cap nhat
      updateStudent(formData);
    } else {
      // them moi
      addStudent(formData);
    }

    setFormData({
      id: null,
      name: "",
      dob: "",
      gender: "",
      className: "",
      email: ""
    });
  };

  return (
    <div className="form-section card p-4 mb-5 shadow">
      <h2 className="mb-4">{formData.id ? "Sửa Sinh viên" : "Thêm Sinh viên"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Họ tên:</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Ngày sinh:</label>
            <input type="date" name="dob" className="form-control" value={formData.dob} onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Giới tính:</label>
            <select name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
              <option value="">-- Chọn giới tính --</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Lớp:</label>
            <input type="text" name="className" className="form-control" value={formData.className} onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email:</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-end justify-content-end">
            <button type="submit" className="btn btn-primary px-4 py-2">
              {formData.id ? "Cập nhật" : "Thêm"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
