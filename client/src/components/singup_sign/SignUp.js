import React from 'react'
import "./signup.css"
import {NavLink} from 'react-router-dom'

const SignUp = () => {
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
                    <input type='text' name='name' id='name'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='number'> Mobile number</label>
                    <input type='text' name='mobile' id='mobile'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='email'>Email (optional) </label>
                    <input type='text' name='email' id='email'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' placeholder='At least 6 char'
                    />
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Password Again</label>
                    <input type='password' name='password' id='password'/>
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
