import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header'
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col items-center">
      <Header />
      <div className="mt-12 text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to Tell Me When</h1>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-[#3E91D8] text-white rounded-md hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-[#3E91D8] text-white rounded-md hover:bg-blue-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
