import { useState } from "react";
import './App.css';
import AddModal from "./AddModal";
import TransactionList from "./TransactionList";


export default function AddModal({ onAdd, onClose }) {
  const [khachHang, setKhachHang] = useState("");
  const [nhanVien, setNhanVien] = useState("");
  const [soTien, setSoTien] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!khachHang || khachHang.length > 30) {
      setError("Khách hàng không được để trống và không quá 30 ký tự.");
      return;
    }
    if (!nhanVien || nhanVien.length > 30) {
      setError("Nhân viên không được để trống và không quá 30 ký tự.");
      return;
    }
    if (!soTien || Number(soTien) <= 0) {
      setError("Số tiền phải lớn hơn 0.");
      return;
    }
    onAdd({ khachHang, nhanVien, soTien: Number(soTien) });
  };

  return (
    <div className="modal">
      <div className="modal-content custom-modal">
        <div className="modal-header">
          <h3>Thêm giao dịch</h3>
          <button onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <input
              type="text"
              placeholder="Khách hàng"
              value={khachHang}
              onChange={(e) => setKhachHang(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nhân viên"
              value={nhanVien}
              onChange={(e) => setNhanVien(e.target.value)}
            />
            <input
              type="number"
              placeholder="Số tiền"
              value={soTien}
              onChange={(e) => setSoTien(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose}>Hủy</button>
            <button type="submit">Thêm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
