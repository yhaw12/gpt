import React from 'react'
import './signin.css'


import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"

// Google Signin Button Option
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Signin() {
    
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [showPassIcon, setshowPassIcon] = useState(false);

    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential);
            // ...
        })
        .catch((error) => {
            console.log(error)
            // ..
        });
    }


    const signInGoogle  = async ()=>{
        const provider = new GoogleAuthProvider(); 

        try{
            await signInWithPopup(auth, provider);
        }
        catch{
            (error) => console.error(error)
        }
    }

      
  return (
    <div className='singin_main_card'>
        <div className='signin_ac_card'>
            <div className='toptext'>
                <h2>Welcome to our HomeLand</h2>
            </div>

            <form action="" onSubmit={signIn}>

                <div className="login_card"><input type="email" placeholder='Email' value={email} onChange={(e)=>getEmail(e.target.value)} /><FaEnvelope/></div>

                <div className="login_card"><input type={showPassIcon ? "text" : "password"} placeholder='Password' value={password} onChange={(e)=>getPassword(e.target.value)}/>
                {showPassIcon
                    ?<FaLock cursor='pointer' onClick={()=>setshowPassIcon(false)}/>
                    :<FaEye cursor='pointer' onClick={()=>setshowPassIcon(true)}/>
                }
                </div>                    


                <div className="txt"><h5>Forgot password?</h5>
                <h5>Don't have an account</h5></div>

                
             <button type="submit" className='btn'>login</button>
            </form>
            <div className='sp'><span>OR</span></div>
            
            <div className="bt"><FaGoogle/><button type="submit" onClick={signInGoogle} className='btn'>Continue with Google</button></div>
        </div>
    </div>
  )
}

export default Signin