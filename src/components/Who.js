import office from './images/pyxel_office.jpg'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Who = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <div data-aos='zoom-out-down' className="who showcase-container">
            <img src={office} alt="Our Office" width="512px"/>
            <p>We produce the best products from all over the world, develop it and most importantly in a great UI design. We also have services for Uzbekistan, CIS and European countries. Our main goal is to provide our customers with a wide range of services and implement them. We are developing high-end websites, mobile applications and chatbots which will stand out among your competitors. We are designing a unique UI with the best user experience, making your clients enjoy your service. We are analyzing your existing application's performance, security, reliability and UX, proposing ways to improve. Turning your brilliant ideas into technical documentation for your new awesome product in PyxelGroup Company !</p>
            <button className="btn btn-outline">Read More</button>
        </div>
    )
}

export default Who
