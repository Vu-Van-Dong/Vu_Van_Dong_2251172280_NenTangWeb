import { useState } from "react";

function AddModal({ onAdd }) {
  const [ten, setTen] = useState("");
  const [hoDem, setHoDem] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ten || ten.length > 30) return setError("Tên không được trống hoặc quá 30 ký tự.");
    if (!hoDem || hoDem.length > 30) return setError("Họ đệm không được trống hoặc quá 30 ký tự.");
    if (!diaChi || diaChi.length > 50) return setError("Địa chỉ không được trống hoặc quá 50 ký tự.");

    onAdd({ ten, hoDem, diaChi });
    setTen(""); setHoDem(""); setDiaChi(""); setError("");

    const modal = bootstrap.Modal.getInstance(document.getElementById("addModal"));
    modal.hide();
  };

  return (
    <div className="modal fade" id="addModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Thêm giao dịch</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label>Tên</label>
                <input type="text" className="form-control" value={ten} onChange={e => setTen(e.target.value)} />
              </div>
              <div className="mb-3">
                <label>Họ đệm</label>
                <input type="text" className="form-control" value={hoDem} onChange={e => setHoDem(e.target.value)} />
              </div>
              <div className="mb-3">
                <label>Địa chỉ</label>
                <input type="text" className="form-control" value={diaChi} onChange={e => setDiaChi(e.target.value)} />
              </div>
              {error && <div className="text-danger fw-bold">{error}</div>}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">Thêm</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
