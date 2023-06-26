import React from 'react'
import "./buynow.css"
import { Divider } from '@mui/material'
import Option from './Option'
import Subtotal from './Subtotal'
const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
            <div className='left_buy'>
                <h1>shopping Cart</h1>
                <p>select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider />
                <div className='item_container'>
                    <img src='./logo.jpg' />
                    <div className='item_details'>
                        <h3>000</h3>
                        <h3>smart watches</h3>
                        <h3 className='diffrentprice'>000</h3>
                        <p className='unusuall'>usually dispatched in 8 days</p>
                        <p>Eligible fro FREE Shipping</p>
                        <img src='./amz_logo.png' />
                        <Option/>
                    </div>
                    <h3 className='item_price'>4049.00</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>


        </div>
       
    </div>
  )
}

export default Buynow
