import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams(); // Извлечение jobId из параметров маршрута
  const navigate = useNavigate();
  const [job, setJob] = useState(null); // Состояние для задания

  useEffect(() => {
    // Извлечение данных из localStorage
    if (typeof window !== "undefined") {
      const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
      const foundJob = storedJobs.find((job) => job.id === parseInt(jobId));
      setJob(foundJob || null); // Установка найденного задания
    }
  }, [jobId]);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col items-center">
        <header className="w-full bg-[#3E91D8] text-white text-center py-4 text-xl font-bold">
          TELL ME WHEN
        </header>
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">Job not found</h2>
          <button
            className="mt-4 px-4 py-2 bg-[#3E91D8] text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-[#3E91D8] text-white text-center py-4 text-xl font-bold">
        TELL ME WHEN
      </header>

      {/* Content */}
      <div className="mt-6 w-2/3 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">Job Details</h2>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Job Description:
          </label>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
            value={job.description}
            readOnly
          />
        </div>

        {/* Due Date */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Due Date:</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
            value={job.due}
            readOnly
          />
        </div>

        {/* Back Button */}
        <button
          className="px-4 py-2 bg-[#3E91D8] text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
