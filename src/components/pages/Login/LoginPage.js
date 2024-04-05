import './LoginPage.css';
import brandImage from './assets/brand.png';
import LoginForm from './LoginForm';
import {auth,provider}from '../../../FirebaseConfig';
import {useState} from 'react';
import { signInWithPopup } from "firebase/auth";
import DashboardPage from '../Dashboard/DashboardPage';

export default function LoginPage(){
    const[user,setUser]=useState(null);

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            const user=result.user;
            console.log(user);
            setUser(user);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleLogout=()=>{
        setUser(null);
    }

    return(
<>
        {user ? (
            <>
              <DashboardPage user={user} handleLogout={handleLogout}/>
            </>
      ):(
            <div className="login-page">
                <div className="container grid">
                    <div className='login-page-loginForm'>
                        <LoginForm handleGoogleSignIn={handleGoogleSignIn}/>
                    </div>
                    <div className='login-page-image'>
                        <img
                            alt='heroImage'
                            src={brandImage}
                        />
                    </div>
                </div>
            </div>
      )};
      </>
    )
}