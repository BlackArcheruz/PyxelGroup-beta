import logo from '../components/images/favicon.png'
import Menu from './Menu';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
            <li><img src={logo} alt="" style={{width: '45px'}}/>yxelGroup</li>
            </ul>
                    <Menu/>
        </nav>
    )
}

export default Navbar
