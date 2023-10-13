import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const Navbar = () => {

   const {cartItems } = useCart()


  return (
    <>
    <div className="navSection">
        <Link to='/' className='refresh'>
       
        <div className="tittle">
            <h2>E-mart</h2>
        </div>
        </Link>
        <div className="search">
            <input type="text" placeholder='search....' />
        </div>
        <div className="user">
            <div className="user-detail">
                signIn/signUp
            </div> 
        </div>
        <Link to='/cart'>
        <div className="cart">
                cart
                <span>
                    {cartItems.length}
                </span>
            </div>
            </Link>
    </div>
    <div className="subMenu">
        <ul>
            <Link to='/mobiles'>
            <li>Mobiles</li>
            </Link>
            <Link to='/computers'>
            <li>Computers</li>
            </Link>
            <Link to='/men'>
            <li>Men</li>
            </Link>
          
            <li>Ac</li>
            <li>Computers</li>
            <li>Men</li>
            <li>Ac</li>
            <li>Computers</li>
            <li>Men</li>
            <li>Ac</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar