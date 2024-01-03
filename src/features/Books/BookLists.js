import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "./counterSlice";
import { NavLink } from "react-router-dom";

export default function BookLists() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(fetchAllBooksAsync());
  }, [dispatch]);

  return (
    <div>
      <div className="header-sec-book-body">
        <h1> Books Of Learna</h1>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink> Programming</NavLink>
              </li>
              <li>
                <NavLink> Science </NavLink>
              </li>
              <li>
                <NavLink> Python </NavLink>
              </li>
              <li>
                <NavLink> Python </NavLink>
              </li>
              <li>
                <NavLink> javaa script </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="books-sec">
        <div>
          {books &&
            books.map((items, index) => {
              return (
                <NavLink key={index}>
                  <div className="card w-14-h">
                    <div>
                      <img
                        src={Thumb}
                        alt=""
                        className="w-14-h ob-cover box-shadow-1"
                      />
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
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
}
