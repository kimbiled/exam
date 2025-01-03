import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col items-center">
      <header className="w-full bg-[#3E91D8] text-white text-center py-4 text-xl font-bold">
        TELL ME WHEN
      </header>
    <div className="mt-12 bg-white shadow-lg rounded-2xl p-6 w-96">
      <h2 className="text-center text-2xl font-semibold">Register</h2>
      <RegisterForm formData={formData} handleInputChange={handleInputChange} />
    </div>
    </div>
  );
};

export default RegisterPage;
