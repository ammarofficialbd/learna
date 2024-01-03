import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  } from "./counterSlice";
import { NavLink } from "react-router-dom";

export default function stackHub() {
  const count = useSelector();
  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(fetchAllStackAsync());
  }, [dispatch]);

  return (
    <div>
      
    </div>
  );
}
