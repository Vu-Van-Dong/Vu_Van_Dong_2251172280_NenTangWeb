// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("employeeForm");
  const addBtn = document.getElementById("addEmployeeBtn");
  const inputs = form.querySelectorAll("input, textarea");

  function showError(input, message) {
    let error = input.parentNode.querySelector(".error-msg");
    if (!error) {
      error = document.createElement("div");
      error.className = "error-msg text-danger small";
      input.parentNode.appendChild(error);
    }
    error.textContent = message;
  }

  function clearError(input) {
    const error = input.parentNode.querySelector(".error-msg");
    if (error) error.remove();
  }

  function validateForm() {
    let isValid = true;
    inputs.forEach(input => {
      clearError(input);
      const value = input.value.trim();
      const label = input.previousElementSibling.innerText;

      if (value === "") {
        showError(input, `${label} không được để trống`);
        isValid = false;
      }

      if (label === "Phone" && value !== "") {
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(value)) {
          showError(input, "SĐT phải 10 số và bắt đầu bằng 0");
          isValid = false;
        }
      }
    });
    return isValid;
  }

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thêm nhân viên thành công!");
      form.reset();
    }
  });
});
