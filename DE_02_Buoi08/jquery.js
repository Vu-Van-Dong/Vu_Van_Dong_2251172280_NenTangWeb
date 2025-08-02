$(document).ready(function(){

    const $form = $('#addForm');
    const $errorMsg = $('#error-msg');
    const $tableBody = $('table tbody');

    $form.on('submit', function(e){
        e.preventDefault();

        const kh = $('#khach_hang').val().trim();
        const nv = $('#nhan_vien').val().trim();
        const st = $('#so_tien').val().trim();

        // Kiem tra du lieu
        if(!kh || kh.length > 30){
            $errorMsg.text("Khách hàng không được để trống và không quá 30 ký tự.").fadeIn();
            return;
        }
        if(!nv || nv.length > 30){
            $errorMsg.text("Nhân viên không được để trống và không quá 30 ký tự.").fadeIn();
            return;
        }
        if(!st || Number(st) <= 0){
            $errorMsg.text("Số tiền phải lớn hơn 0.").fadeIn();
            return;
        }

        $errorMsg.text("").fadeOut();

        // Tao hang moi
        const newRow = `
            <tr>
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
            </tr>
        `;

        $tableBody.append(newRow);

        // Xoa du lieu trong form
        $form.trigger('reset');

        // Dong modal Bootstrap sau khi them
        const modal = bootstrap.Modal.getInstance($('#addModal')[0]);
        modal.hide();
    });

});
