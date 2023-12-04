import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Register.css'

export default function Register() {
const [firstname,setFirstName]=useState('')
const [lastname,setLastName]=useState('')
const [phonenumber,setPhonenumber]=useState('')
const [emailid,setEmailid]=useState('')
const [password,setPassword]=useState('')

const [firstnameerror,setFirstNameError]=useState('')
const [lastnameerror,setLastNameError]=useState('')
const [phonenumbererror,setPhonenumberError]=useState('')
const [emailiderror,setEmailidError]=useState('')
const [passworderror,setPasswordError]=useState('')


const validateForm = () => {
    let isValid = true;

    if (!firstname) {
        setFirstNameError('*First Name is required');
        isValid = false;
    } else {
        setFirstNameError('');
    }

    if (!lastname) {
        setLastNameError('*Last Name is required');
        isValid = false;
    } else {
        setLastNameError('');
    }
    if (!phonenumber || !/^\d{10}$/.test(phonenumber)) {
        setPhonenumberError('*Phone Number must be 10 digits');
        isValid = false;
    } else {
        setPhonenumberError('');
    }
    if (!emailid || !emailid.includes('@gmail.com')) {
        setEmailidError('*Enter a valid Gmail address');
        isValid = false;
    } else {
        setEmailidError('');
    }

    if (
        !password ||
        password.length < 8 ||
        !/[A-Z]/.test(password) || // At least one uppercase letter
        !/\d/.test(password) || // At least one digit
        !/[!@#$%^&*(),.?":{}|<>]/.test(password) // At least one special character
    ) {
        setPasswordError(
            '*Password must be at least 8 characters and contain one uppercase letter, one digit, and one special character'
        );
        isValid = false;
    } else {
        setPasswordError('');
    }

    return isValid;
};

const HandleRegister= async()=>{
    if(validateForm()){
    try{
        const response=await axios.post('http://localhost:3900/register',{firstname,lastname,phonenumber,emailid,password})
        if(response.data){
            alert('register successfull')
        }
    }catch(error){
            alert('register failed',error.message)
    }
}
}


  return (
    <div>
        <div  className='container box' >
            <h1>SIGN IN</h1>
            <div className='form-group'>
                <label>First Name</label>
                <input
                    type='text'
                    className='form-control'
                    value={firstname}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                />
                <div style={{color:"red"}} className='error-message'>{firstnameerror}</div>
            </div>
            <div className='form-group'>
                <label>Last Name</label>
                <input
                    type='text'
                    className='form-control'
                    value={lastname}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                />
                <div style={{color:"red"}} className='error-message'>{lastnameerror}</div>
            </div>
            <div className='form-group'>
                <label>Emailid</label>
                <input
                    type='text'
                    className='form-control'
                    value={emailid}
                    onChange={(e) => {
                        setEmailid(e.target.value);
                    }}
                />
                <div style={{color:"red"}} className='error-message'>{emailiderror}</div>
            </div>
            <div className='form-group'>
                <label>Phone Number</label>
                <input
                    type='text'
                    className='form-control'
                    value={phonenumber}
                    onChange={(e) => {
                        setPhonenumber(e.target.value);
                    }}
                />
                <div style={{color:"red"}} className='error-message'>{phonenumbererror}</div>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input
                    type='password'  // Change to password type for sensitive information
                    className='form-control'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <div style={{color:"red"}} className='error-message'>{passworderror}</div>
            </div>
            <button className='btn btn-primary' onClick={HandleRegister}>
                Register
            </button>
            <p>If Your Already Registered?Please <a href='/Login'>Login</a></p>
        </div>

        
    </div>
  )
}