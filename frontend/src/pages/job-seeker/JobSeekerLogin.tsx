import React from "react";
import LoginForm from "../../components/Form/LoginForm/LoginForm"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const JobSeekerLogin: React.FC<{
  onLogin: (userId: string, access_token: string) => void;
}> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the landing page
  };

  return (
    <div>
      <LoginForm onLogin={onLogin} loginType="Job Seeker" />
      <img
        src={logo}
        alt="Go Back"
        onClick={handleGoBack}
        style={{ cursor: "pointer", marginTop: "15px" }}
      />
    </div>
  );
};

export default JobSeekerLogin;
