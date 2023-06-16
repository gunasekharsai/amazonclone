import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
const navbaar = () => {
  return (
    <header>
      <nav>
        <div className='left'>
          <div className='navlogo'>
           <img src="./logo.jpg" alt="logo" />
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
            <a href=''>Signin</a>
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
