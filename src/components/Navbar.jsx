import React from 'react'
import u1 from "../img/u1.jpg" ;

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">WassUp</span>
      <div className="user">
        <img src={u1} alt="" />
        <span>Suraj</span>
        <button>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar
