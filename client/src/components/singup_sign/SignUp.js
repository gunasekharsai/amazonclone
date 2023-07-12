import "./signup.css"
import {NavLink} from 'react-router-dom'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const senddata =  async(e)=>{
        e.preventDefault();
        const {fname, email, mobile, password, cpassword} = udata;

        const res = await fetch("register", {
            method : "POST",
            headers:{
                "content-Type" : "application/json"
            },
            body:JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
        // console.log(data);

        if(res.status===422||!data){
            toast.warn('Data Inavalid', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        else{
            toast.success('Data Added Succefully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setUdata({...udata,fname:"",email:"" ,mobile:"",password:"",cpassword:""});
        }
    }
  return (
    <div>
        <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src='./amz_logo.png' alt='amazon_logo' />

        </div>
        <div className='sign_form'>
              <form method="POST">
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


                <button className='signin_btn' onClick={senddata}>Continue</button>
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
