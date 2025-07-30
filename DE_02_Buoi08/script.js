const form = document.getElementById('addForm');
const errorMsg = document.getElementById('error-msg');
const tableBody = document.querySelector('table tbody');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const kh = document.getElementById('khach_hang').value.trim();
    const nv = document.getElementById('nhan_vien').value.trim();
    const st = document.getElementById('so_tien').value.trim();

    // Kiem tra du lieu
    if(!kh || kh.length > 30){
        errorMsg.textContent = "Khách hàng không được để trống và không quá 30 ký tự.";
        return;
    }
    if(!nv || nv.length > 30){
        errorMsg.textContent = "Nhân viên không được để trống và không quá 30 ký tự.";
        return;
    }
    if(!st || Number(st) <= 0){
        errorMsg.textContent = "Số tiền phải lớn hơn 0.";
        return;
    }

    errorMsg.textContent = "";

    // Tao hang moi
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td class="delete-col">×</td>
        <td class="action-icons">
            <button class="btn-action view"><i class="fa fa-eye"></i></button>
            <button class="btn-action edit"><i class="fa fa-pen"></i></button>
            <button class="btn-action delete"><i class="fa fa-times"></i></button>
        </td>
        <td>${Math.floor(Math.random()*10000)}</td>
        <td>${kh}</td>
        <td>${nv}</td>
        <td>${Number(st).toLocaleString()}</td>
        <td>${new Date().toLocaleString('vi-VN')}</td>
    `;

    tableBody.appendChild(newRow);

    // Xoa du lieu trong form
    form.reset();

    // Dong modal sau khi them
    const modal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
    modal.hide();
});
