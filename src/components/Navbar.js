import logo from '../components/images/favicon.png'
import Menu from './Menu';
import {useState} from 'react'

const Navbar = () => {
    const [visible,setVisible] = useState('hidden');
    const onClick = ()=>{
        setVisible('visible')
    }
    return (
        <div>
            <nav className="navbar">
            <ul>
            <li><a href="/"><img src={logo} alt="" style={{width: '35px'}}/>yxelGroup</a></li>
            </ul>
            <button className="hamburger" onClick={onClick}><i className="fas fa-bars fa-2x"></i></button>
        </nav>
        <Menu visible={visible}/>
        </div>
    )
}

export default Navbar
