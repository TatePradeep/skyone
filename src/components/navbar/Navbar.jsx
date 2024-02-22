import './navbar.css'
import FLogo from '../../assets/Finalized logo 1.png'
import skyonelogo from '../../assets/SkyOne.png'
import Hamburger from '../../assets/Vector.png'

const Navbar = () => {
  return (
    <div className='nav'>
<div className='skyone__nav-logo'>
  
        <img  src={FLogo} alt="" />
        <img className="skyone" src={skyonelogo} alt="" />
        </div>
        <div className="nav-links">
          <div className='nav-liks-container'>
           <ul>
           <li><a href="#">ABOUT</a></li>
           <li><a href="#">PROJECT</a></li>
           <li><a href="#">INDEX</a></li>
           <li><a href="#">CONTACT</a></li>
           </ul>
           </div>
<div className='skyone__huambuger'>
        <img src={Hamburger} alt="Hamburger" />
        </div>        
        </div>
    </div>
  )
}

export default Navbar