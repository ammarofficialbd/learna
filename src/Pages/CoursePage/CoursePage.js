import React from "react";
import CourseList from "../../features/Courses/Components/CourseList";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
function CoursePage() {
  return (
    <div>
      <Navbar>
        <CourseList />
      </Navbar>
      <Footer />
    </div>
  );
}

export default CoursePage;
