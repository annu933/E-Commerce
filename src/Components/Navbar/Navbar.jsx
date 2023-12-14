import React, { useState } from 'react'
import logo from '../Assets/img/shoppingBagLogo.jpg'
import cartIcon from '../Assets/img/cartIcon.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [ menu,setMenu] = useState('shop')
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" width={60} />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu('shop')}><Link to={'/'}>Shop</Link>{menu == 'shop'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu('mens')}><Link to={'/mens'}>Men</Link>{menu == 'mens'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu('womens')}><Link to={'/womens'}>Women</Link>{menu == 'womens'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu('kids')}><Link to={'/kids'}>Kids</Link>{menu == 'kids'?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img src={cartIcon} alt="" width={40} /></Link>
        <div className="nav-cart-count">0</div>
      </div>
     

    </div>
  )
}
