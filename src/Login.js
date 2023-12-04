import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'

export default function Login() {
    const [emailid,setEmailid]=useState('')
    const [password,setPassword]=useState('')
    const HandleLogin= async()=>{
        try{
            const response=await axios.get(`http://localhost:3900/login/${emailid}/${password}`)

            if(response.data){
                alert('login successfull')
            }
        }catch(error){
            alert('login failed',error.message)
        }
    }
  return (
    <center><div className='login-div'><br/>
        <h1>LOGIN</h1><br/>
        <div>
            <label>EMAIL ID</label>
            <input type='emailid' value={emailid} onChange={(e)=>setEmailid(e.target.value)}/>
        </div>
        <div>
            <label>PASSWORD</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <br/>
        <button onClick={HandleLogin}>LOGIN</button>
        <p>If Your New User?Please <a href='/Register'>Signin</a></p>
        
        
    </div></center>
  )
}