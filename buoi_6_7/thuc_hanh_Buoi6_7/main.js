const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");
const message = document.getElementById("message");
let editingRow = null;

// ✅ Lấy danh sách sinh viên từ localStorage
function getStudents() {
  return JSON.parse(localStorage.getItem("students")) || [];
}

// ✅ Lưu danh sách sinh viên vào localStorage
function saveStudents(students) {
  localStorage.setItem("students", JSON.stringify(students));
}

function showMessage(text, type = "success") {
  message.textContent = text;
  message.className = type;
  setTimeout(() => message.textContent = "", 3000);
}

function validateForm(data) {
  if (!data.name || !data.dob || !data.gender || !data.class || !data.email) {
    showMessage("Vui lòng điền đầy đủ thông tin!", "error");
    return false;
  }
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(data.email)) {
    showMessage("Email không hợp lệ!", "error");
    return false;
  }
  return true;
}

function clearForm() {
  form.reset();
  editingRow = null;
  document.getElementById("submitBtn").textContent = "Thêm";
}

function updateSTT() {
  const rows = tableBody.querySelectorAll("tr");
  rows.forEach((row, index) => {
    row.querySelector("td").textContent = index + 1;
  });
}

function createRow(data) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="stt"></td>
    <td>${data.name}</td>
    <td>${data.dob}</td>
    <td>${data.gender}</td>
    <td>${data.class}</td>
    <td>${data.email}</td>
    <td class="actions">
      <button class="action-btn edit-btn">Sửa</button>
      <button class="action-btn delete-btn">Xóa</button>
    </td>
  `;
  tableBody.appendChild(row);
  updateSTT();
}

// ✅ Hiển thị danh sách sinh viên khi load trang
function renderStudents() {
  tableBody.innerHTML = "";
  const students = getStudents();
  students.forEach(student => createRow(student));
}

// ✅ Khi submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value.trim(),
    dob: document.getElementById("dob").value,
    gender: document.getElementById("gender").value,
    class: document.getElementById("class").value.trim(),
    email: document.getElementById("email").value.trim()
  };

  if (!validateForm(data)) return;

  let students = getStudents();

  if (editingRow) {
    const index = [...tableBody.children].indexOf(editingRow);
    students[index] = data; // ✅ Cập nhật dữ liệu trong mảng
    saveStudents(students);
    renderStudents();
    showMessage("Cập nhật sinh viên thành công!");
  } else {
    students.push(data); // ✅ Thêm vào mảng
    saveStudents(students);
    createRow(data);
    showMessage("Thêm sinh viên thành công!");
  }

  clearForm();
});

// ✅ Sự kiện sửa / xóa
tableBody.addEventListener("click", (e) => {
  const btn = e.target;
  const row = btn.closest("tr");
  const index = [...tableBody.children].indexOf(row);
  let students = getStudents();

  if (btn.classList.contains("delete-btn")) {
    if (confirm("Bạn có chắc muốn xóa sinh viên này?")) {
      students.splice(index, 1); // ✅ Xóa trong mảng
      saveStudents(students);
      renderStudents();
      showMessage("Đã xóa sinh viên!");
    }
  }

  if (btn.classList.contains("edit-btn")) {
    editingRow = row;
    const cells = row.querySelectorAll("td");
    document.getElementById("name").value = cells[1].textContent;
    document.getElementById("dob").value = cells[2].textContent;
    document.getElementById("gender").value = cells[3].textContent;
    document.getElementById("class").value = cells[4].textContent;
    document.getElementById("email").value = cells[5].textContent;
    document.getElementById("submitBtn").textContent = "Cập nhật";
  }
});

// ✅ Load dữ liệu khi mở trang
document.addEventListener("DOMContentLoaded", renderStudents);
