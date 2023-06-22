import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import {NavLink} from "react-router-dom"
const navbaar = () => {
  return (
    <header>
      <nav>
        <div className='left'>
          <div className='navlogo'>
            <NavLink to ='/'> <img src="./amz_dark_logo.png" alt="logo" /> </NavLink> 
          </div>
          <div className='nav_searchbaar' >
            <input type='text' name='' id='' />
            <div className='search_icon'>
                 <SearchIcon id = "search" />
              </div>        
           </div>
        </div>
        <div className='right'>
          <div className='nav_btn'>
            <NavLink to='/login'>Signin</NavLink>
          </div>
          <div className='cart_btn'>
           <Badge badgeContent={4} color="primary">
               <ShoppingCartSharpIcon id=" shopping cart" />
           </Badge>
              <p>cart</p>
          </div>
          <Avatar className='avtar' />

        </div>
      </nav>
    </header>
  )
}

export default navbaar
