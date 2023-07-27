import React from 'react'
import './signup.css'

import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

import { createUserWithEmailAndPassword } from 'firebase/auth'

function Signup() { 

  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');
  const [showPassIcon, setshowPassIcon] = useState(false);

  return (
    <div className='signup_main_card'>
        <div className='signup_ac_card'>
            <div className='toptext'>
                <h2>Welcome to our HomeLand</h2>
            </div>

            <form action="">

                <div className="signup_card"><input type="email" placeholder='Email' /><FaEnvelope/></div>
                <div className="signup_card"><input type="password" placeholder='Password'/>
                
                <FaEye/></div>

                <h5>Already have an account</h5>

                
             <button type="submit" className='btn'>signup</button>
            </form>
            <div className='sp'><span>OR</span></div>
            
            <div className="bt"><FaGoogle/><button type="submit" className='btn'>Continue with Google</button></div>
        </div>
    </div>
  )
}

export default Signup