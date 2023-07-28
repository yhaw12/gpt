import React from 'react'
import {useState, useEffect} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import {auth} from '../../firebase'


function authLogic() {
  const [authUser, setAuthUser] = useState(null);
  
  useEffect(()=>{
    const listen = onAuthStateChanged(auth, (user)=>{
        if (user){
            setAuthUser(user);
        }
        else{
            setAuthUser(null);
        }
    });
        return()=>{
            listen()
        }
  }, []);
        const userSignOut = ()=>{
            signOut(auth).then(()=>{
                console.log('You are signed Out')
            }) 
        }
  return(
        <div>
            {authUser
            ?<><p>{`signed In as ${authUser.email}`}</p><buton>Sign In</buton></>
            : <><button>Sign Out</button></>
            }
        </div>
  );
  
}

export default authLogic