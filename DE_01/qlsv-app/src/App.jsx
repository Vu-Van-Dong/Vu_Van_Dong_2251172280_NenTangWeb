// src/App.jsx
import { useState } from 'react';
import './App.css';
import employeesData from './data';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddEmployee = (newEmp) => {
    if (editIndex !== null) {
      const updated = [...employees];
      updated[editIndex] = newEmp;
      setEmployees(updated);
      setEditIndex(null);
    } else {
      setEmployees([...employees, newEmp]);
    }
    setShowForm(false);
  };

  const handleDelete = (indexToDelete) => {
    const updated = employees.filter((_, idx) => idx !== indexToDelete);
    setEmployees(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h2>TLU</h2>
        <nav>
          <span>Home</span> / <span>Employees</span>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="btn btn-search">Search</button>
        </div>
      </header>

      <main className="employee-manager">
        <div className="manager-header">
          <h1>Manage <strong>Employees</strong></h1>
          <div>
            <button className="btn btn-danger">🗑 Delete</button>
            <button className="btn btn-success" onClick={() => {
              setEditIndex(null); // reset form nếu đang sửa
              setShowForm(true);
            }}>
              ➕ Add New Employee
            </button>
          </div>
        </div>

        {showForm && (
          <EmployeeForm
            onAdd={handleAddEmployee}
            onCancel={() => {
              setShowForm(false);
              setEditIndex(null);
            }}
            editData={editIndex !== null ? employees[editIndex] : null}
          />
        )}

        <EmployeeTable
          data={employees}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default App;
