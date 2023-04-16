import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              Paient HomePage
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menue active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                    Home
                </Link>   
                </li>
            </ul>

            <ul className={click ? 'nav-menue active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/patient 1' className='nav-links' onclick={closeMobileMenu}>
                    patient 1
                </Link>   
                </li>
            </ul>

            <ul className={click ? 'nav-menue active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/patient 2' className='nav-links' onclick={closeMobileMenu}>
                patient 2
                </Link>   
                </li>
            </ul>

            <ul className={click ? 'nav-menue active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/patient 3' className='nav-links' onclick={closeMobileMenu}>
                patient 3
                </Link>   
                </li>
            </ul>

            <ul className={click ? 'nav-menue active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/patient 4' className='nav-links' onclick={closeMobileMenu}>
                patient 4
                </Link>   
                </li>
            </ul>

            <ul className={click ? 'nav-menue active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/patient 5' className='nav-links' onclick={closeMobileMenu}>
                patient 5
                </Link>   
                </li>
            </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
