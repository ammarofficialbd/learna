import React from "react";
import "./topics.css";
import { NavLink } from "react-router-dom";

export default function Topics() {
  const data = [
    {
      h4: " Development ",
      p1: "Python ",
      p1s: "5,994 learners",
      p2: "Web Development",
      p2s: "54,994 learners",
      p3: "Machine Learning",
      p3s: "34,994 learners",
    },
    {
      h4: " Business ",
      p1: "Financial Analysis ",
      p1s: "364 learners",
      p2: "SQL",
      p2s: "3,994 learners",
      p3: "Trading And Share Market",
      p3s: "36,994 learners",
    },
    {
      h4: " IT and Software",
      p1: "Amazon AWS ",
      p1s: "6,123,456 learners",
      p2: "Ethical Hacking",
      p2s: "3,994 learners",
      p3: "Cyber Security",
      p3s: "36,994 learners",
    },
    {
      h4: " Design",
      p1: "Photoshop ",
      p1s: "3,381,052 learners",
      p2: "Graphic Design",
      p2s: "3,994 learners",
      p3: "Drawing",
      p3s: "2,410,849 learners",
    },
  ];
  return (
    <div className="topics-sec px-20">
      <h3 className="text-grey-600"> Featured topics by category </h3>
      <div className="category">
        
        {data.map((item, index) => (
          <div key={index} className="child d-flex flex-col">
            <h4>{item.h4}</h4>
            <NavLink>{item.p1}</NavLink>
            <span className="text-sm"> {item.p1s}</span>
            <NavLink>{item.p1}</NavLink>
            <span className="text-sm"> {item.p2s}</span>
            <NavLink>{item.p1}</NavLink>
            <span className="text-sm"> {item.p3s}</span>
          </div>
        ))}
      </div>
      <button className="btn btn-outline mt-20"> Explore More Topics </button>
    </div>
  );
}
