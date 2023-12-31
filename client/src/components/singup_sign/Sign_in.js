import "./signup.css"
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'


const Sign_in = () => {



    const [logdata,setData] = useState({
        email:"",
        password: "",
    }); // use state is a hookp

    console.log(logdata)
    const adddata = (e)=>{
        const {name,value} = e.target;

        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    }
   
  return (
   <> 
   <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src='./amz_logo.png' alt='amazon_logo' />

        </div>
        <div className='sign_form'>
              <form>
                <h1>Sign-In</h1>
                <div className='form_data'>
                    <label htmlFor='email'> Email</label>
                    <input type='text' 
                    onChange ={adddata}
                    value={logdata.email}

                    name='email' id='emial'/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' 
                    onChange={adddata}
                    value={logdata.password}
                    name='password' id='password'/>
                </div>

                <button className='signin_btn'>Continue</button>
              </form>

        </div>
        <div className='create_accountinfo'>

            <p>New To Amazon</p>
            <NavLink to ='/register'><button>Create Your amazon account</button></NavLink>

        </div>

    </div>
   </section>
   
   
   </>
  )
}

export default Sign_in
