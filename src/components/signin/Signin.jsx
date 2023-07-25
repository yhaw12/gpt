import React from 'react'
import './signin.css'

import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// import { getAuth } from "firebase/auth";

// const auth = getAuth();
// auth.languageCode = 'it';

// import { getAuth, signInWithRedirect } from "firebase/auth";

// const auth = getAuth();
// signInWithRedirect(auth, provider);


// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
// import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth();
// getRedirectResult(auth)
//   .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;

    // The signed-in user info.
    // const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
//   }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
//   });

function Signin() {

    // const[changePassword, setchangePassword] = useState(false)
  return (
    <div className='singin_main_card'>
        <div className='signin_ac_card'>
            <div className='toptext'>
                <h2>Move to our HomeLand</h2>
            </div>

            <form action="">

                <div className="login_card"><input type="email" placeholder='Email' /><FaEnvelope/></div>
                <div className="login_card"><input type="text" placeholder='Password'/><FaEye/></div>

                <div className="txt"><h5>Forgot password?</h5>
                <h5>Don't have an account</h5></div>

                
             <button type="submit" className='btn'>login</button>
             {/* https://website-design-ae9ea.firebaseapp.com/__/auth/handler */}
            </form>
            <div className='sp'><span>OR</span></div>
            
            <div className="bt"><FaGoogle/><button type="submit" className='btn'>Continue with Google</button></div>

            

        </div>
    </div>
  )
}

export default Signin