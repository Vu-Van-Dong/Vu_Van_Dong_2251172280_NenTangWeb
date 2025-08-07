function Toolbar() {
  return (
    <div className="toolbar d-flex justify-content-between mt-3">
      <div>
        <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addModal">
          <i className="fa fa-plus"></i> THÊM
        </button>
        <button className="btn btn-info btn-sm text-white ms-2">
          <i className="fa fa-file-export"></i> XUẤT RA FILE
        </button>
      </div>
      <div className="d-flex">
        <input type="text" className="form-control form-control-sm me-2" placeholder="Tìm kiếm bằng tên" />
        <button className="btn btn-secondary btn-sm"><i className="fa fa-search"></i> Tìm kiếm</button>
      </div>
      <div>
        <select className="form-select form-select-sm">
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
    </div>
  );
}

export default Toolbar;
