import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import studentData from "./data";
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentData);
  const [editStudent, setEditStudent] = useState(null);

  // Them sinh vien moi
  const addStudent = (student) => {
    setStudents([...students, { id: students.length + 1, ...student }]);
  };

  // Xoa sinh vien
  const deleteStudent = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sinh viên này?")) {
      setStudents(students.filter((sv) => sv.id !== id));
    }
  };

  // Chon sinh vien de sua
  const startEdit = (student) => {
    setEditStudent(student);
  };

  // Cap nhat sinh vien sau khi sua
  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((sv) => (sv.id === updatedStudent.id ? updatedStudent : sv))
    );
    setEditStudent(null);
  };

  return (
    <div>
      <div className="navbar">Quản lý Sinh viên</div>
      <div className="wrapper">
        <div className="container">
          <StudentForm
            addStudent={addStudent}
            editStudent={editStudent}
            updateStudent={updateStudent}
          />
          <StudentTable
            students={students}
            deleteStudent={deleteStudent}
            startEdit={startEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
