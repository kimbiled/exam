import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import JobsPage from "./pages/JobsPage";
import JobDetails from "./components/JobDetails";
import QRCodePage from "./pages/QRCodePage"; // Новый компонент

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="/qr-code" element={<QRCodePage />} /> {/* Новый маршрут */}
      </Routes>
    </Router>
  );
};

export default App;
