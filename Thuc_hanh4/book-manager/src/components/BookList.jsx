import React, { useState } from 'react';
import '../App.css';

function BookList({ books, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');

  const handleEdit = (book) => {
    setEditingId(book.id);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  };

  const handleSave = (id) => {
    onUpdate({ id, title: editTitle, author: editAuthor });
    setEditingId(null);
  };

  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Tên sách</th>
          <th>Tác giả</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td>
              {editingId === book.id ? (
                <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
              ) : (
                book.title
              )}
            </td>
            <td>
              {editingId === book.id ? (
                <input value={editAuthor} onChange={(e) => setEditAuthor(e.target.value)} />
              ) : (
                book.author
              )}
            </td>
            <td>
              {editingId === book.id ? (
                <button onClick={() => handleSave(book.id)}>Lưu</button>
              ) : (
                <>
                  <button onClick={() => handleEdit(book)}>Sửa</button>
                  <button onClick={() => onDelete(book.id)} className="delete-btn">Xoá</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
