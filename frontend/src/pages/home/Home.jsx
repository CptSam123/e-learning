import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the E-Learning Platform</h1>
        <p>Your gateway to quality education. Get started by exploring our available courses!</p>
        <Link to="/courses">
          <button className="common-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
