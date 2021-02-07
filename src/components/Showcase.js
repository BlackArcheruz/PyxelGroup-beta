import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Showcase = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    
    return (
        <div data-aos="fade-down" className="showcase">
            <h3 style={{textAlign:'center'}}>WE'RE</h3>
            <h1>CREATIVE <br/> AGENCY</h1>
            <p>Developing high-end websites, mobile applications and chatbots which will stand out among your competitors. Designing a unique UI with the best user experience, making your clients enjoy your service</p>
            <Link to='/services'><button className="btn btn-light">Learn More</button></Link>
            <Link to='/contact'><button className="btn btn-outline">Buy Now</button></Link>
        </div>
    )
}

export default Showcase
