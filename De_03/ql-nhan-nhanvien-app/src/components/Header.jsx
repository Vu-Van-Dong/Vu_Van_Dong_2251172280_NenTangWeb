function Header() {
  return (
    <header className="bg-dark text-white d-flex justify-content-between align-items-center p-2">
      <div className="logo fw-bold">Trường Đại học Thủy lợi</div>
      <div className="d-flex align-items-center gap-2">
        <a href="#">Trang chủ</a>
        <a href="#">Quản lý cửa hàng</a>
        <input type="text" placeholder="Nhập nội dung tìm kiếm" />
        <button className="btn btn-success btn-sm">TÌM KIẾM</button>
      </div>
    </header>
  );
}

export default Header;
