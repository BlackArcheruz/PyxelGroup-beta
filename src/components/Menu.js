import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Menu
