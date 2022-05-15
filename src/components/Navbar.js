import logo from '../images/airbnb-logo.svg';

export default function NavBar(){
    return(
        <nav className="navbar" >
            <img src={logo} alt="logo" className='nav-logo'/>
        </nav>
    )
}