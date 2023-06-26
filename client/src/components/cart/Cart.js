import React from 'react'
import "./cart.css";
import { Divider } from '@mui/material';
import { color } from '@mui/system';
const Cart = () => {
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className="left_cart">
           < img src='' alt=''  />
           <div className='cart_btn'>
            <button className='cart_btn1'>Add to Cart</button>
            <button className='cart_btn2'>Buy Now</button>
           </div>
        </div>
        <div className='right_cart'>
         <h3>Fitness Gear</h3>
         <h4>Pigeon favorite Electric Kettle(1.5L,Silver,Black)</h4>
         <Divider/>
         <p className='mrp'>M.R.P : 1195</p>
         <p> Deal Of the  Day : <span style={{color:"#B12704"}}>625.00</span></p>
         <p> You save : <span style={{color:"#B12704"}}>570 (47%)</span></p>
         <div className='discount_box'>
            <h5>Discount : <span style={{color:"#111"}}>Extra 10% Off</span></h5>
            <h4>Free Delivery <span style={{color:"#111",fontWeight:600}}>Oct 8 -21</span> Details </h4>
            <p>Fastest Delivery: <span style={{color:"#111",fontWeight:600}}> Tommarow 11AM</span></p>
         </div>

         <p className='description'>About the item : <span style={{color:"#565959", fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}> this produuct is woonderful on its use life time guarntee given to this product</span></p>
        </div>

      </div>
    </div>
  )
}

export default Cart
