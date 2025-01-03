import React, { useState } from "react";

const navigate = useNavigate(); 

const NewJobModal = ({ isOpen, onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    description: "",
    deadline: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQrChange = (e) => {
    navigate("")
  }
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-1/3 rounded-lg shadow-lg p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Create a job
        </h2>
        <form>
          {/* Description Field */}
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

          {/* Deadline Field */}
          <div className="mb-6">
            <label
              htmlFor="deadline"
              className="block text-gray-700 font-medium mb-2"
            >
              Deadline:
            </label>
            <div className="flex items-center">
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
                value={formData.deadline}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onConfirm(formData)}
              className="px-4 py-2 bg-[#3E91D8] text-white rounded-lg hover:bg-blue-600 transition"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewJobModal;
