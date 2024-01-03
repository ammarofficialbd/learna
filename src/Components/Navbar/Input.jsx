import React from 'react'

import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
function Input() {
  return (
    <div class="search-box px-12 py-12 cur-point items-center text-center bg-slate-100">
        <input type="text" id="userInput" placeholder="Search here..." class="md-text " />
        <NavLink href="#"> 
        <FaSearch  className='fas fa-search text-center text-grey-200'/>
        </NavLink>
    </div>
  )
}

export default Input