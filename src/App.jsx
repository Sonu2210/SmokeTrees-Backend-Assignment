import React, { useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', address: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Form submitted successfully!');
    } else {
      setMessage(`Error: ${data.message}`);
    }
  };

  return (
    <div className="container">
      <h1>User Address Form</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <input
          placeholder='Name'
          className='form-input'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
          placeholder='Address'
          className='form-input'
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='submit-button'>Submit</button>
      </form>
      {message && <p className='message'>{message}</p>}
    </div>
  );
}

export default App;
