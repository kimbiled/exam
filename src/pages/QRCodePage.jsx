import React from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
const QRCodePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="mt-12 text-center flex flex-col">
        <h2 className="text-2xl font-semibold mb-6">
          Scan your QR to receive notifications
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-row justify-center">
          {/* QR Code Placeholder */}
          <img
            src="https://via.placeholder.com/150"
            alt="QR Code"
            className="w-48 h-48"
          />
        </div>
        <button
          className="mt-6 px-4 py-2 bg-[#3E91D8] text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate("/jobs")}
        >
          Back to dashboard
        </button>
      </div>
    </div>
  );
};

export default QRCodePage;
