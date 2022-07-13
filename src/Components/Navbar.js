import React from 'react';
import './comp.css';
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className='navBar'>
        <div className='top'>
          <h2>m-harambee</h2>
          <div className='ci'>
            <button id='burgher'><FiMenu /></button>
            <button>donations</button>
            <button>about</button>
            <button>partner</button>
          </div>
        </div>
        <h1>The best way to manage your fundraiser</h1>
    </nav>
  )
}

export default Navbar