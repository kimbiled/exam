import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JobsPage = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    deadline: "",
  });

  const navigate = useNavigate();

  const isCurrent = activeTab === "current";
  const isHistory = activeTab === "history";

  const [jobs, setJobs] = useState(() => {
   
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ description: "", deadline: "" });
  };

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);
  
  const handleConfirmModal = () => {
    const newJob = {
      id: jobs.length + 1,
      userId: Math.random().toString(36).substring(7),
      description: formData.description,
      due: formData.deadline,
    };
  
    setJobs([...jobs, newJob]);
    setIsModalOpen(false);
    setFormData({ description: "", deadline: "" });
  
    navigate("/qr-code");
  };
  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-[#3E91D8] text-white text-center py-4 text-xl font-bold">
        TELL ME WHEN
      </header>

      {/* Content */}
      <div className="mt-6 w-4/5">
        <div className="flex justify-between items-center">
          {/* Tabs */}
          <div className="flex items-center bg-gray-200 rounded-full p-1">
            <button
              className={`px-4 py-2 rounded-full transition ${
                isCurrent ? "bg-[#3E91D8] text-white" : "text-black"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current
            </button>
            <button
              className={`px-4 py-2 rounded-full transition ${
                isHistory ? "bg-[#3E91D8] text-white" : "text-black"
              }`}
              onClick={() => setActiveTab("history")}
            >
              History
            </button>
          </div>

          {/* New Job Button */}
          <button
            className="px-4 py-2 bg-[#3E91D8] text-white rounded-xl hover:bg-blue-600 transition"
            onClick={handleOpenModal}
          >
            New Job
          </button>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-2xl font-semibold">List of Jobs</h2>

        {/* Job List Table */}
        <div className="mt-4 bg-white rounded-lg shadow p-4">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#3E91D8] text-white">
                <th className="p-2 border border-gray-300">Job ID</th>
                {isHistory && (
                  <th className="p-2 border border-gray-300">User ID</th>
                )}
                <th className="p-2 border border-gray-300">Description</th>
                <th className="p-2 border border-gray-300">Due</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate(`/job/${job.id}`)}
                >
                  <td className="p-2 border border-gray-300 text-center">
                    {job.id}
                  </td>
                  {isHistory && (
                    <td className="p-2 border border-gray-300 text-center">
                      {job.userId}
                    </td>
                  )}
                  <td className="p-2 border border-gray-300 text-center">
                    {job.description}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {job.due}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center items-center">
          <div className="bg-white p-2 rounded-2xl shadow-md flex items-center space-x-4">
            <button
              className="px-4 py-2 bg-[#3E91D8] text-white rounded-xl shadow-md hover:bg-blue-600 transition"
              onClick={() => console.log("Previous Page")}
            >
              &lt;
            </button>
            <span className="text-gray-700 font-semibold">Page 1</span>
            <button
              className="px-4 py-2 bg-[#3E91D8] text-white rounded-xl shadow-md hover:bg-blue-600 transition"
              onClick={() => console.log("Next Page")}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-1/3 rounded-lg shadow-lg p-6">
            <h2 className="text-center text-2xl font-semibold mb-6">
              Create a job
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter job description"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="deadline"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Deadline:
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmModal}
                  className="px-4 py-2 bg-[#3E91D8] text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Generate QR Code
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
