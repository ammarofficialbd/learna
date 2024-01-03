import React from "react";
import Slider from "../Components/Slider/Slider";
import TrustedBy from "../Components/Company/TrustedBy";
import CardSlider from "../Components/CardSlider/CardSlider";
import ReviewPage from "../Components/Review/ReviewPage";
import Topics from "./../../src/Components/Topics/Topics";
/* import Course from "../Components/CourseSlider.jsx/Course"; */
import Courses from "./../Components/Courses/Courses";

function Home() {
  return (
    <>
      <div className="container-xl mx-auto ">
        <Slider />
      </div>
      <div className="sec-02 w-full">
        <TrustedBy />
      </div>
      <div className="sec-03 container-xl mx-auto w-full">
        <CardSlider />
      </div>
      <div className="sec-04 bg-grey-50 w-full mt-20">
        <ReviewPage />
      </div>
      <div className="sec-05 w-full container-xl mx-auto mt-20">
        <Topics />
      </div>
      <div className="sec-05 w-full container-xl mx-auto pt-20">
        <h2 className="text-slate-600 px-10"> Learners are viewing </h2>
        <Courses />
      </div>
    </>
  );
}

export default Home;
