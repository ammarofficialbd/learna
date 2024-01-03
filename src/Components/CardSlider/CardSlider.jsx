import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";
import './cardslider.css'
function CardSlider() {
  return (
    <div>
      <div className="course-text">
        <h2 className="text-start text-grey-600 bold-text-2 font-size-36 px-10">
          A broad selection of courses
        </h2>
        <p className="text-start text-grey-600 text-xl px-10">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
      </div>
      <div className="nav-sec px-20">
        <Nav />
      </div>
      <div className="cards-sec w-full border-grey-900 py-10 px-30">
        <div className="text-sec pb-10">
          <h2 className="text-grey-800">
             
            Expand your career opportunities with Web Design 
          </h2>
          <p className="text-grey-700 text-xl w-62 ">
             
            Take one of Learna’s range of Web Design courses and learn how to
            code using this incredibly useful language. Its simple syntax and
            readability makes website perfect for Html, Css, data science, and
            machine learning. You’ll learn how to build everything from games to
            sites to apps.
          </p>
          <NavLink className="btn btn-outline"> Explore Web Design</NavLink>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
