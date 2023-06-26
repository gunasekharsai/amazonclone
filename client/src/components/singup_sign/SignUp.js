import "./signup.css"
import {NavLink} from 'react-router-dom'
import React, { useState } from 'react'

const SignUp = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    // console.log(udata);

    console.log(udata);
    const adddata = (e)=>{
        const {name,value} = e.target;

        setUdata (()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }
  return (
    <div>
        <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src='./amz_logo.png' alt='amazon_logo' />

        </div>
        <div className='sign_form'>
              <form>
                <h1>Create Account</h1>
                <div className='form_data'>
                    <label htmlFor='fname'>Your name </label>
                    <input type='text' 
                    //onChange={(e)=>setUdata({...udata,fname:e.target.value})}
                    onChange={adddata}
                    value={udata.fname}
                    name='fname' id='name'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='number'> Mobile number</label>
                    <input type='text'
                    onChange={adddata}
                    value={udata.mobile}
                    name='mobile' id='mobile'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='email'>Email (optional) </label>
                    <input type='text'
                    onChange={adddata}
                    value={udata.email}
                     name='email' id='email'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' 
                    onChange={adddata}
                    value={udata.password}
                    name='password' id='password' placeholder='At least 6 char'
                    />
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Password Again</label>
                    <input type='password'
                    onChange={adddata}
                    value={udata.cpassword}
                    name='cpassword' id='password'/>
                </div>


                <button className='signin_btn'>Continue</button>
                <div className='signin_info'>
                    <p>Already have an account?</p>
                    <NavLink to ='/login'>Signin</NavLink>
                </div>
              </form>

        </div>

    </div>
   </section>
      
    </div>
  )
}

export default SignUp
