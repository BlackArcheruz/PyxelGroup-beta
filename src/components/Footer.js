import logo from '../components/images/favicon.png'
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <footer data-aos="fade-down"> 
            <ul>
                <li><a href="/" style={{fontSize: 'xx-large'}}><img src={logo} alt="" style={{width: '45px'}}/>yxelGroup</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://github.com/pyxel-group"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/company/pyxel-group"><i className="fab fa-linkedin"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer
