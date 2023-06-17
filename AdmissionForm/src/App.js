import React, { useState } from 'react';
import './App.css';
import './style.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const submitBtn = () => {
    alert('Admission Form Submitted!!');
  };

  return (
    <div className="container">
      <h1 className="title">Admission Form</h1>
      <form onSubmit={submitBtn}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <footer><p>Created by Harsh Ranjan.</p></footer>
    </div>
    
  );
};

export default App;
