import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import Header from '../components/Header'
const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col items-center">
      <Header> </Header>
    <div className="mt-12 bg-white shadow-lg rounded-2xl p-6 w-96">
      <h2 className="text-center text-2xl font-semibold">Login</h2>
      <LoginForm formData={formData} handleInputChange={handleInputChange} />
    </div>
    </div>
  );
};

export default LoginPage;
