import logo from '../components/images/favicon.png'
import Menu from './Menu';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            <ul>
            <li><a href="/"><img src={logo} alt="" style={{width: '35px'}}/>yxelGroup</a></li>
            </ul>
            <button className="hamburger"><i className="fas fa-bars fa-2x"></i></button>
        </nav>
        <Menu/>
        </div>
    )
}

export default Navbar
