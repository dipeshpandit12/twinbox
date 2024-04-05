import './LoginPage.css';
import brandImage from './assets/brand.png';
import LoginForm from './LoginForm';

export default function HomePage(){
    return(
            <div className="login-page">
                <div className="container grid">
                    <div className='login-page-loginForm'>
                        <LoginForm/>
                    </div>
                    <div className='login-page-image'>
                        <img
                            alt='heroImage'
                            src={brandImage}
                        />
                    </div>
                </div>
            </div>
    )
}