import React from "react";

const LoginForm = ({ formData, handleInputChange }) => {
  return (
    <form className="mt-4">
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="button"
        className="w-full bg-[#3E91D8] text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
