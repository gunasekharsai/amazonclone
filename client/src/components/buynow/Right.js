import React from 'react'

const Right = () => {
  return (
    <div className='right_buy'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png' alt='full-filled'/>
        <div className='cost_right'>
            <p>Your order is elligible for Free delivery.</p>  <br/>
            <span style={{color:"#565959"}}>select these options at checkout. Details

            </span>
            <h3>SubTotal (1 items) : <span style={{fontWeight:700}}>4049.0</span></h3>
            <button className='rightbuy_btn'>Procced to buy</button>
            <div className='emi'>
                Emi available
            </div>
            </div> 
    </div>
  )
}

export default Right
