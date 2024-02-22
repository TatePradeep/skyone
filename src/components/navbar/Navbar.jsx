import './navbar.css'
import FLogo from '../../assets/Finalized logo 1.png'
import skyonelogo from '../../assets/SkyOne.png'
import {FaBars,FaTimes} from "react-icons/fa" 
import { useRef } from 'react'


const Navbar = () => {

  const navRef=useRef();
const  showNavbar=()=>
{
  navRef.current.classList.toggle("responsive_nav")
}

  return (
    <div className='nav'>
<div className='skyone__nav-logo'>
  
        <img className='logo' src={FLogo} alt="" />
        <img className="skyone" src={skyonelogo} alt="" />
        </div>

        <div  className="nav-links">
            
           <a href="#">ABOUT</a>
           <a href="#">PROJECT</a>
           <a href="#">INDEX</a>
           <a href="#">CONTACT</a>
  
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>   
        <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
       </button>
        
       </div>
{/* new */}
<div className='new-nav-links-content'>
        <div ref={navRef} className="nav-links">
            
           <a href="#">01 ABOUT</a>
           <a href="#">02 PROJECT</a>
           <a href="#">03 INDEX</a>
           <a href="#">04 CONTACT</a>

           <div className='email-no'>
            <p>project@skyone.co</p>
            <p>(+44)0117 922 6892</p>
           </div>

           <div className='social-tags'>
          <h4>T W I T T E R</h4>
          <h4>I N S T A G R A M</h4>
          <h4>L I N K E D I N</h4>
          <h4>D R I B B L E</h4>
          <h4>B E H A N C E</h4>
           </div>
  
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>   
       </div>
       <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
       </button>
       
    </div>
    </div>
  )
}

export default Navbar