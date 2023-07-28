import React from 'react'
import './signup.css'

import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase'

// Google 
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth'

const provider = new GoogleAuthProvider();

function Signup() { 

  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');
  const [showPassIcon, setshowPassIcon] = useState(false);


  const signUp =(e)=>{
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        console.log(userCredential)
      })
      .catch(error => console.log(error))
  }

  const signUpGoogle  = async ()=>{
    const provider = new GoogleAuthProvider(); 

    try{
        await signInWithPopup(auth, provider);
    }
    catch{
        (error) => console.error(error)
    }
}

  return (
    <div className='signup_main_card'>
        <div className='signup_ac_card'>
            <div className='toptext'>
                <h2>Signup to our HomeLand</h2>
            </div>

            <form action="" onSubmit={signUp}>
              
                <div className="signup_card"><input type='email' value={email} placeholder='Type your email' onChange={(e)=>getEmail(e.target.value)}/><FaEnvelope/></div>

                
                <div className="signup_card"><input type={showPassIcon ? 'text' : 'password'} value={password} placeholder='Type Your Password' onChange={(e)=>getPassword(e.target.value)} />
                {showPassIcon
                ?<FaLock cursor='pointer' onClick={()=>setshowPassIcon(false)} />
                :<FaEye cursor='pointer' onClick={()=>setshowPassIcon(true)} />
                }
                </div>

                <h5>Already have an account</h5>

                
             <button type="submit" className='btn'>signup</button>
            </form>
            <div className='sp'><span>OR</span></div>
            
            <div className="bt"><FaGoogle/><button type="submit" onClick={signUpGoogle} className='btn'>Continue with Google</button></div>
        </div>
    </div>
  )
}

export default Signup