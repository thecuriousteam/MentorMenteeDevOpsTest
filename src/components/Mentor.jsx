import React, { useState } from 'react';
// import { FaUser, FaCalendarAlt, FaEnvelope, FaMobileAlt, FaLock, FaBook } from 'react-icons/fa';

const Mentor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    course: '',
    year: '',
    dateOfBirth: '',
    mobileNumber: '',
    gmail: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here, if needed
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <div className="form-group">
          <span className="text-gray-600">
            {/* <FaUser /> */}
          </span>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        </div>
        <div className="mb-4">
        <div className="form-group">
        <span className="form-icon">
        {/* <FaBook /> */}
        </span>
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        </div>
        <div className="mb-4">
        <div className="form-group dual-input flex">
          <span className="form-icon">
            {/* <FaCalendarAlt /> */}
          </span>
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            required
            className="form-control"
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        </div>
        <div className="mb-4">
        <div className="form-group">
          <span className="form-icon">
            {/* <FaMobileAlt /> */}
          </span>
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        </div>
        <div className="mb-4">
        <div className="form-group">
          <span className="form-icon">
            {/* <FaEnvelope /> */}
          </span>
          <input
            type="email"
            name="gmail"
            placeholder="Gmail"
            value={formData.gmail}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        </div>
        <div className="mb-4">
        <div className="form-group">
          <span className="form-icon">
            {/* <FaLock /> */}
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        </div>
        {/* Other form fields */}
        <button type="submit" className="btn btn-primary text-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Mentor;
