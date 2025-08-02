const form = document.getElementById('addForm');
const errorMsg = document.getElementById('error-msg');
const tableBody = document.querySelector('table tbody');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const kh = document.getElementById('khach_hang').value.trim();
    const nv = document.getElementById('nhan_vien').value.trim();
    const st = document.getElementById('so_tien').value.trim();

    // Kiểm tra dữ liệu
    if(!kh || kh.length > 30){
        errorMsg.textContent = "Tên không được để trống và không quá 30 ký tự.";
        return;
    }
    if(!nv || nv.length > 30){
        errorMsg.textContent = "Họ đệm không được để trống và không quá 30 ký tự.";
        return;
    }
    if(!st || st.length > 50){
        errorMsg.textContent = "Địa chỉ để trống và không quá 50 ký tự.";
        return;
    }

    errorMsg.textContent = "";

    // Icon mặc định là dấu tích
    const activeIcon = `
      <div class="border border-1 border-secondary border-dashed rounded py-1 text-start ps-2">
        <i class="bi bi-check-lg text-success fs-5"></i>
      </div>`;

    // STT = số lượng hàng hiện tại + 1
    const stt = tableBody.rows.length + 1;

    // Tạo hàng mới với nút caret-down ở cột đầu tiên
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>
            <button class="btn btn-outline-dark btn-sm rounded-1 px-2 py-1 me-3">
                <i class="bi bi-caret-down-fill"></i>
            </button>
        </td>
        <td class="action-icons">
            <button class="btn-action view"><i class="fa fa-eye"></i></button>
            <button class="btn-action edit"><i class="fa fa-pen"></i></button>
            <button class="btn-action delete"><i class="fa fa-times"></i></button>
        </td>
        <td>${stt}</td>
        <td>${kh}</td>
        <td>${nv}</td>
        <td>${st}</td>
        <td>${activeIcon}</td>
    `;

    tableBody.appendChild(newRow);

    // Cập nhật lại STT cho tất cả các dòng (đảm bảo tuần tự khi xóa/thêm)
    Array.from(tableBody.rows).forEach((row, index) => {
        row.cells[2].textContent = index + 1; // Cột STT luôn là số thứ tự
    });

    // Xóa dữ liệu trong form
    form.reset();

    // Đóng modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
    modal.hide();
});
