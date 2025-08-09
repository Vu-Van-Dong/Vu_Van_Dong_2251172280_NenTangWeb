import { useState } from 'react';

function EmployeeTable({ data, onDelete, onEdit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <table width="100%" cellPadding="10">
        <thead>
          <tr>
            <th></th>
            <th>Name</th><th>Email</th><th>Address</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((emp, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.address}</td>
              <td>{emp.phone}</td>
              <td className="actions">
                <span className="action-icon edit" onClick={() => onEdit(index + indexOfFirstRow)}>✏️</span>
                <span className="action-icon delete" onClick={() => onDelete(index + indexOfFirstRow)}>🗑️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-summary">
        Showing {currentData.length} out of {data.length} entries
      </div>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
      
    </>
  );
}

export default EmployeeTable;
