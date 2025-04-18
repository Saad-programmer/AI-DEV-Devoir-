import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form1() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    yearOfStudy: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      id="login-form"
      onSubmit={handleSubmit}
      style={{
        margin: 'auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        top:"20px"
      }}
    >
        <div className="" style={{ marginBottom: '15px', position: 'relative' }}>
          <i className="fas fa-user" style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }}></i>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your complete name"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              paddingLeft: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="input-box" style={{ marginBottom: '15px', position: 'relative' }}>
          <i className="fas fa-envelope" style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }}></i>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="loginEmail"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              paddingLeft: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="input-box" style={{ marginBottom: '15px', position: 'relative' }}>
          <i className="fas fa-phone" style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }}></i>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              paddingLeft: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="input-box" style={{ marginBottom: '15px', position: 'relative' }}>
          <i className="fas fa-venus-mars" style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }}></i>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              paddingLeft: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              appearance: 'none',
              backgroundColor: 'white',
            }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="input-box" style={{ marginBottom: '15px', position: 'relative' }}>
          <i className="fas fa-calendar" style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }}></i>
          <input
            type="text"
            name="dob"
            placeholder="Enter your date of birth (jj/mm/yyyy)"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              paddingLeft: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div className="input-box" style={{ marginBottom: '15px', position: 'relative' }}>
          <i className="fas fa-graduation-cap" style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }}></i>
          <select
            name="yearOfStudy"
            id="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              paddingLeft: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              appearance: 'none',
              backgroundColor: 'white',
            }}
          >
            <option value="">Select Year of Study</option>
            <option value="S1">S1</option>
            <option value="S3">S3</option>
            <option value="S6">S6</option>
            <option value="S+">S+</option>
          </select>
        </div>
        <div className="input-box" style={{ marginBottom: '15px', position: 'relative' }}>
          <i className="fas fa-lock" style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }}></i>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              paddingLeft: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
          <i
            className="bi bi-eye-fill"
            style={{ position: 'absolute', right: '10px', top: '12px', cursor: 'pointer', color: '#888' }}
            id="togglePassword"
          ></i>
        </div>

        <div className="button input-box" style={{ textAlign: 'center' }}>
          <button
            type="submit"
            className="btn"
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#007BFF',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link to="/login" className="text" style={{ color: '#007BFF', textDecoration: 'none' }}>
            Have an account? Go back here
          </Link>
        </p>
    </form>
  );
}

export default Form1;
