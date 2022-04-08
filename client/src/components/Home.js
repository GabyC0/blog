import React from 'react'
import { Link } from 'react-router-dom'
import {Nav} from './Nav'

export const Home = () => {
  return (
    <div className="top">
        {/* <Nav/> */}
        <div >
          <h1> Gumball Travels </h1>
        </div>
        <div>
          <h2>Getting lost in the right direction...</h2>
        </div>

        <Link className='homeBtn' to='/create'><button>Add New Blog</button></Link>
        <Link className='homeBtn' to='/about'><button>About Me</button></Link>
        
      </div>
  )
}
