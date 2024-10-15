import React from "react";
import "./dashbord.css";  // Importing the associated CSS for styling
import { CourseData } from "../../context/CourseContext";  // Accessing courses data from the context
import CourseCard from "../../components/coursecard/CourseCard";  // CourseCard component

const Dashbord = () => {
  const { courses } = CourseData();  // Extracting courses from CourseContext

  console.log(courses);  // Logging courses for debugging

  return (
    <div className="student-dashboard">  {/* Applying the main container class */}
      <h2>All Enrolled Courses</h2>  {/* Dashboard Title */}

      <div className="dashboard-content">  {/* Course content container */}
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />  // Rendering each course using CourseCard component
          ))
        ) : (
          <p>No Courses Enrolled Yet!</p>  // Message when no courses are enrolled
        )}
      </div>
    </div>
  );
};

export default Dashbord;
