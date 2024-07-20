import React, { useRef, useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef("");
  const handle=()=>{
 let sidebar=document.getElementById("sidebar");
 if( sidebar.id){
  setToggle(false);
 }
  }
  return (
    <div>
      <div className='navbar'>
        <div>
          <h3 className='heading'>To-Do-List</h3>
        </div>
        <div className='menu'>
          <ul className='parent-menu'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className='menu-icon'>
        <i className="fas fa-bars" onClick={()=>setToggle(!toggle)}></i>
     { toggle &&   <div className='sidebar-manu' onClick={handle}  id='sidebar'>
          <div className='sidebar'>
            <h3 className='mobile-heading'>To-Do-List</h3>
            <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>Sign Up</li>
            </ul>
          </div>
        </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar