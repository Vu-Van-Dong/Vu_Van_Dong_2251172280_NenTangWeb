$(document).ready(function(){

    // Lấy phần tử bằng jQuery
    const $form = $('#addForm');
    const $errorMsg = $('#error-msg');
    const $tableBody = $('table tbody');

    // Bắt sự kiện submit form
    $form.on('submit', function(e){
        e.preventDefault();

        const kh = $('#khach_hang').val().trim();
        const nv = $('#nhan_vien').val().trim();
        const st = $('#so_tien').val().trim();

        // Kiểm tra dữ liệu
        if(!kh || kh.length > 30){
            $errorMsg.text("Tên không được để trống và không quá 30 ký tự.").fadeIn();
            return;
        }
        if(!nv || nv.length > 30){
            $errorMsg.text("Họ đệm không được để trống và không quá 30 ký tự.").fadeIn();
            return;
        }
        if(!st || st.length > 50){
            $errorMsg.text("Địa chỉ để trống và không quá 50 ký tự.").fadeIn();
            return;
        }

        $errorMsg.text("").fadeOut();

        // Icon mặc định
        const activeIcon = `
          <div class="border border-1 border-secondary border-dashed rounded py-1 text-start ps-2">
            <i class="bi bi-check-lg text-success fs-5"></i>
          </div>`;

        // STT = số lượng hàng hiện tại + 1
        const stt = $tableBody.find('tr').length + 1;

        // Hàng mới
        const newRow = `
            <tr>
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
            </tr>
        `;

        $tableBody.append(newRow);

        // Cập nhật lại STT cho tất cả hàng
        $tableBody.find('tr').each(function(index){
            $(this).find('td').eq(2).text(index + 1);
        });

        // Reset form
        $form.trigger('reset');

        // Đóng modal Bootstrap
        const modal = bootstrap.Modal.getInstance($('#addModal')[0]);
        modal.hide();
    });

});
