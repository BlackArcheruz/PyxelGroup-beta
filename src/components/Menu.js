import {Link} from 'react-router-dom'

const Menu = ({visible}) => {
  return (
    <div className="menu" style={{visibility: visible}}>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Menu
