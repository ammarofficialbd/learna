import {useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Logo from './../../img/logo2.png'
import Input from "./Input";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";


function Navbar({children}) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="min-h-full"> 
      <header className="d-flex justify-between items-center mx-auto px-20">
      <div>
        <NavLink to='/'>  <img src={Logo} alt="Learna" className="w-10"/> </NavLink>
       
      </div>
      <nav ref={navRef} className="gap-6 px-10">

        <NavLink to="">Category</NavLink>
        <Input />
        <NavLink to="" className='NavBus'> Books </NavLink>
        <NavLink to="/courses">Courses </NavLink>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <div className="cart-btn">
          <NavLink className="btn btn-out-success"> <FaCartPlus/> </NavLink>
        </div>
        <div className="login-btn">
          <NavLink to="/login" className="btn btn-out-success"> Login</NavLink>
        </div>
        <div className="signup-btn">
          <NavLink to="/signup" className="btn btn-out-success "> Signup</NavLink>
        </div>
        
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    <main>
        <div> 
          {children}
        </div>
    </main> 
    
    </div>
    
  );
}

export default Navbar;
