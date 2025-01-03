import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  // Пример данных (можно заменить на реальный запрос к API)
  const job = {
    id: jobId,
    description: `Detailed description for Job ${jobId}`,
    remarks: "",
    notifications: "",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-[#3E91D8] text-white text-center py-4 text-xl font-bold">
        TELL ME WHEN
      </header>

      {/* Content */}
      <div className="mt-6 w-2/3 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">Job details</h2>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Job description
          </label>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
            value={job.description}
            readOnly
          />
        </div>

        {/* Remarks */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Remarks</label>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
            placeholder="Enter remarks"
          />
          <button
            className="mt-2 px-4 py-2 bg-[#3E91D8] text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => console.log("Remarks saved")}
          >
            Complete
          </button>
        </div>

        {/* Notifications */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Notifications
          </label>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
            placeholder="Enter notifications"
          />
          <button
            className="mt-2 px-4 py-2 bg-[#3E91D8] text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => console.log("Notification sent")}
          >
            Send
          </button>
        </div>

        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
