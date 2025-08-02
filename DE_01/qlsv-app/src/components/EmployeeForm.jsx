// src/components/EmployeeForm.jsx
import { useState, useEffect } from 'react';

function EmployeeForm({ onAdd, onCancel, editData }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  // Nếu đang chỉnh sửa, load dữ liệu vào form
  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert('Vui lòng nhập đầy đủ thông tin');
    onAdd(form);
    setForm({ name: '', email: '', address: '', phone: '' });
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{editData ? 'Chỉnh sửa nhân viên' : ' Add Employees'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="address"
            placeholder="Địa chỉ"
            value={form.address}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={handleChange}
          />
          <div>
            <button type="button" onClick={onCancel}>Hủy</button>
            <button type="submit">{editData ? 'Lưu' : 'Thêm'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
