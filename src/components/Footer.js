import logo from '../components/images/favicon.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer> 
            <ul>
                <li><a href="/" style={{fontSize: 'xx-large'}}><img src={logo} alt="" style={{width: '45px'}}/>yxelGroup</a></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="https://github.com/pyxel-group"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/company/pyxel-group"><i className="fab fa-linkedin"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer
