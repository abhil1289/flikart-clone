import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navSection">
        <div className="tittle">
            <h2>E-mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder='search....' />
        </div>
        <div className="user">
            <div className="user-detail">
                signIn/signUp
            </div> 
        </div>
        <div className="cart">
                cart
            </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to='/mobiles'>
            <li>Mobiles</li>
            </Link>
            <li>Computers</li>
            <li>Men</li>
            <li>Ac</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar