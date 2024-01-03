import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="bg-slate-50 footer mt-20">
      <div className="footer-sec container-xl mx-auto">
        <div className="row">
          <div className="col-3 foot-el">
            <h4 className="ml-40"> Company </h4>
            <ul>
              <li> About Us </li>
              <li> Why Udacity? </li>
              <li> Blog </li>
              <li> Jobs at Udac </li>
            </ul>
            <h4 className="ml-40"> Resourse </h4>
            <ul>
              <li> Catalog </li>
              <li> Help and FAQ </li>
              <li> Scholarships </li>
            </ul>
          </div>
          <div className="col-3 foot-el">
            <h4 className="ml-40"> Courses </h4>
            <ul>
              <li> Artificial Intelligence </li>
              <li> Autonomous Systems</li>
              <li>Business</li>
              <li> Cloud Computing</li>
              <li> Cybersecurity </li>
              <li> Data Science </li>
              <li> Executive Leadership</li>
              <li> Product Management </li>
            </ul>
          </div>
          <div className="col-3 foot-el">
            <h4 className="ml-40"> Featured Programs </h4>
            <ul>
              <li> Business Analytics</li>
              <li>Data Analyst </li>
              <li>Intro to Programming</li>
              <li> SQL</li>
              <li>AWS Cloud Architect </li>
              <li> Digital Marketing</li>
              <li> Self Driving Car Engineer</li>
            </ul>
          </div>
          <div className="col-3 foot-el">
            <h4 className="ml-40"> Only at Udacity</h4>
            <ul className="d-flex flex-col">
              <li> Artificial Intelligence </li>
              <li>Deep Learning </li>
              <li> Digital Marketing</li>
              <li> Flying Car and Autonomous Flight Engineer</li>
              <li> Intro to Self-Driving Cars</li>
              <li> Machine Learning Engineer </li>
              <li>Robotics Software Engineer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top"> </div>
      <div>
       <p className="text-center"> © 2023 Lerana Inc. All rights reserved </p> 
        <ul className="d-flex justify-end items-center px-6 py-6 gap-2">
          <li className="py-8"> Facebook </li>
          <li> Linkedin </li>
          <li> Twitter </li>
          <li> YouTube </li>
          <li> Instagram </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
