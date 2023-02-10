import React from 'react';
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="navigation">
        <div className="logo">
            {/* Logo */}
            <img src="passport.png" alt="logo"style={{height:"50px"}}/>
        </div>
        <nav className="item">
            <ul className='ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/blogs'>Blogs</Link>
                </li>
                <li>
                    <Link to='/create'>Create Blog</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
