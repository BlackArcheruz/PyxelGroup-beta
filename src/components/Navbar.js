import logo from '../components/images/favicon.png'
import Menu from './Menu';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            <ul>
            <li><a href="/"><img src={logo} alt="" style={{width: '45px'}}/>yxelGroup</a></li>
            </ul>

        </nav>
        <Menu/>
        </div>
    )
}

export default Navbar
