import React from "react";
import "./common.css";
import { Link, useNavigate } from "react-router-dom"; // Import `useNavigate` for navigation
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast"; // Toast notifications for success messages
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = () => {
  const { user, setUser, setIsAuth } = UserData();
  const navigate = useNavigate();

  // Logout Handler
  const logoutHandler = () => {
    localStorage.clear(); // Clear local storage
    setUser(null); // Set user state to null
    setIsAuth(false); // Set authentication state to false
    toast.success("Logged out successfully!"); // Show logout success message
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to={"/admin/dashboard"}>
            <div className="icon">
              <AiFillHome />
            </div>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to={"/admin/course"}>
            <div className="icon">
              <FaBook />
            </div>
            <span>Courses</span>
          </Link>
        </li>

        {/* Conditional Rendering for Super Admin */}
        {user && user.mainrole === "superadmin" && (
          <li>
            <Link to={"/admin/users"}>
              <div className="icon">
                <FaUserAlt />
              </div>
              <span>Users</span>
            </Link>
          </li>
        )}

        {/* Logout Button */}
        <button className="common-btn"onClick={logoutHandler}>
          <div className="icon">
            <AiOutlineLogout />
          </div>
          <span>Logout</span>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
