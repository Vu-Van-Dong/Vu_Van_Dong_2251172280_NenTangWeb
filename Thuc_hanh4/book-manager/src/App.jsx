import React, { useState, useEffect } from 'react';
import './App.css';
import initialBooks from './data';

function App() {
  const [books, setBooks] = useState(() => {
    const data = localStorage.getItem('books');
    return data ? JSON.parse(data) : [];
  });

  const [form, setForm] = useState({ title: '', author: '', year: '' });
  const [editIndex, setEditIndex] = useState(null); // lưu index đang sửa

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.title.trim() || !form.author.trim() || !form.year.trim()) return;

    if (editIndex !== null) {
      // Đang sửa
      const updatedBooks = [...books];
      updatedBooks[editIndex] = form;
      setBooks(updatedBooks);
      setEditIndex(null); // thoát chế độ sửa
    } else {
      // Thêm mới
      setBooks([...books, form]);
    }

    setForm({ title: '', author: '', year: '' });
  };

  const handleDelete = (index) => {
    const updated = [...books];
    updated.splice(index, 1);
    setBooks(updated);

    if (editIndex === index) {
      setForm({ title: '', author: '', year: '' });
      setEditIndex(null);
    }
  };

  const handleEdit = (index) => {
    setForm(books[index]);
    setEditIndex(index);
  };

  
  // Render giao diện
  return (
    <div className="container">
      <h1>Quản Lý Sách</h1>
      <div className="form">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Tên sách"
        />
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Tác giả"
        />
        <input
          type="text"
          name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="Năm xuất bản"
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? 'Cập nhật' : 'Thêm sách'}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Năm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => (
            <tr key={idx}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(idx)}>Sửa</button>
                <button className="delete" onClick={() => handleDelete(idx)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
