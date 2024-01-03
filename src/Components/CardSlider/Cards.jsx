import React from "react";
import "./cards.css";
import Thumb from "./../../img/thub01.png";
import { FcLike } from "react-icons/fc";

function Cards() {
  
  return (
    <div>
      <div className="card w-14-h">
        <div>
          <img src={Thumb} alt="" className="w-14-h ob-cover box-shadow-1" />
        </div>
        <div className="text-area">
          <h5 className="mb-10 font-size-16 mt-8">
            The Complete Python Bootcamp From Zero to Hero in Python
          </h5>
          <span className="text-xsm"> Ammar Junior </span>
          <div className="rating d-flex items-center">
            <span className="text-base pr-4"> 4.6</span>
            <div class="rating py-3">
              <span class="star checked"></span>
              <span class="star checked"></span>
              <span class="star checked"></span>
              <span class="star "></span>
              <span class="star"></span>
            </div>
          </div>
          <div className="price text-lg text-bold">
            <span> &#2547; </span>300
          </div>
        </div>
          {/* <!-- Hover content --> */}
          <div className="hover-content w-22 box-shadow-1 px-20 py-6">
            <h4 className="px-0">
             
              The Complete Python Bootcamp From Zero to Hero in Python
            </h4>
            <p>Upadated july 2023</p>
            <div className="d-flex justify-start gap-1">
             <li> 22  Hours</li> <li> All Levels  </li>
            </div>
            <p>
              Learn Python like a Professional Start from the basics and go all
              the way to creating your own applications and games
              <ul className="list-items">
                <li className="text-slate-600 pb-4">
                  You will learn how to leverage the power of Python to solve
                  tasks.
                </li>
                <li className="text-slate-600 pb-4">
                  You will build games and programs that use Python libraries.
                </li>
                <li className="text-slate-600">
                  You will be able to use Python for your own work problems or
                  personal projects.
                </li>
              </ul>
            </p>
            <div className="d-flex gap-1 items-center">
              <button className="btn btn-outline px-10 w-full font-size-18 btn-out-default"> Enroll </button>
              <div className="w-4 love rounded-full border-grey-600 text-center">
                <FcLike className="text-center like-icon" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Cards;
