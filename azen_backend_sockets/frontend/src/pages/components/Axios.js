// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

// Name the component (e.g., FrontendForm)
export default function Axios() {
  const [formData, setFormData] = useState({
    option1: '',
    option2: '',
    option3: '',
    name: '',
    saveLocation: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/formSubmitted', formData, {
        withCredentials: true,
      });

      if (response.data.success) {
        console.log('Form submitted successfully!');
        // You can perform additional actions here if needed
      } else {
        console.error('Form submission failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Frontend Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Option 1:
          <input type="text" name="option1" value={formData.option1} onChange={handleChange} />
        </label>
        <br />
        <label>
          Option 2:
          <input type="text" name="option2" value={formData.option2} onChange={handleChange} />
        </label>
        <br />
        <label>
          Option 3:
          <input type="text" name="option3" value={formData.option3} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Save Location:
          <input
            type="text"
            name="saveLocation"
            value={formData.saveLocation}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
