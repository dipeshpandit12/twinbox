import './Header.css'
import logo from './assets/logo.png'

export default function Header(){
    return(
        <header className='nav-bar'>
            <nav className='container grid '>
                <img src={logo} alt="logo"></img>
            </nav>
        </header>
    )
}