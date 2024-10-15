import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading";
import Courses from "./pages/courses/Courses";
import Dashbord from "./pages/dashbord/Dashbord";
import Lecture from "./pages/lecture/Lecture";
import AdminDashbord from "./admin/Dashboard/AdminDashbord";
import AdminCourses from "./admin/Courses/AdminCourses";
import AdminUsers from "./admin/Users/AdminUsers";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

const App = () => {
  const { isAuth, user, loading } = UserData();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route path="/register" element={isAuth ? <Home /> : <Register />} />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route path="/forgot" element={isAuth ? <Home /> : <ForgotPassword />} />
            <Route path="/reset-password/:token" element={isAuth ? <Home /> : <ResetPassword />} />

            {/* Routes for authenticated users */}
            <Route
              path="/:id/dashboard"  // Update this route to match dynamic IDs like `/6704d991f7eb290581624fcf/dashboard`
              element={isAuth ? <Dashbord user={user} /> : <Login />}
            />
            <Route path="/lectures/:id" element={isAuth ? <Lecture user={user} /> : <Login />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={isAuth ? <AdminDashbord user={user} /> : <Login />} />
            <Route path="/admin/course" element={isAuth ? <AdminCourses user={user} /> : <Login />} />
            <Route path="/admin/users" element={isAuth ? <AdminUsers user={user} /> : <Login />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
