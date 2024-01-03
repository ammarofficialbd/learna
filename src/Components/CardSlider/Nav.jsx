import React, { Component } from 'react'
import './Nav.css'

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav className='navbar'>
            <ul className='d-flex items-center'>
                <li> 
                    <button className='link'> Javascript </button>
                </li>
                <li> 
                    <button className='link'> Html & CSS </button>
                </li>
                <li> 
                    <button className='link'> Sass </button>
                </li>
                <li> 
                    <button className='link'> Python </button>
                </li>
                <li> 
                    <button className='link'> Web Development </button>
                </li>
                <li> 
                    <button className='link'> Data Science </button>
                </li>
                <li> 
                    <button className='link'> Data Enty </button>
                </li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Nav