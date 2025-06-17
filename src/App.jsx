import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import VolunteerTraining from "./pages/VolunteerTraining";

function App() {
  return (
    <Router basename="/EDSD_Frontend">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/volunteer-training" element={<VolunteerTraining />} />
      </Routes>
    </Router>
  );
}

export default App;
