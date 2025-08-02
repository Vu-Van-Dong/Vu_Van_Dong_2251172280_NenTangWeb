$(document).ready(function(){

    const $form = $('#employeeForm');
    const $addBtn = $('#addEmployeeBtn');
    const $inputs = $form.find('input, textarea');

    function showError($input, message) {
        let $error = $input.parent().find('.error-msg');
        if ($error.length === 0) {
            $error = $('<div class="error-msg text-danger small"></div>');
            $input.parent().append($error);
        }
        $error.text(message).fadeIn();
    }

    function clearError($input) {
        $input.parent().find('.error-msg').fadeOut(function(){
            $(this).remove();
        });
    }

    function validateForm() {
        let isValid = true;
        $inputs.each(function(){
            const $input = $(this);
            clearError($input);
            const value = $input.val().trim();
            const label = $input.prev().text();

            if (value === "") {
                showError($input, `${label} không được để trống`);
                isValid = false;
            }

            if (label === "Phone" && value !== "") {
                const phoneRegex = /^0\d{9}$/;
                if (!phoneRegex.test(value)) {
                    showError($input, "SĐT phải 10 số và bắt đầu bằng 0");
                    isValid = false;
                }
            }
        });
        return isValid;
    }

    $addBtn.on('click', function(e){
        e.preventDefault();
        if (validateForm()) {
            alert("Thêm nhân viên thành công!");
            $form.trigger('reset');
        }
    });

});
