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
    <div className="mt-12 bg-white shadow-lg rounded-2xl p-6 w-96">
      <h2 className="text-center text-2xl font-semibold">Register</h2>
      <RegisterForm formData={formData} handleInputChange={handleInputChange} />
    </div>
  );
};

export default RegisterPage;
