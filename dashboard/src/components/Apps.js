import React from "react";
import { useNavigate } from "react-router-dom";

const Apps = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/"); 
  };

  return (
    <div className="apps-page">
      <h1>Apps</h1>
      <p>Select an app or go back to dashboard:</p>

      <button onClick={handleGoToDashboard} className="btn">
        Go to Dashboard
      </button>
    </div>
  );
};

export default Apps;
