import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'
import GetInTouch from './GetInTouch'

const Services = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <div data-aos="flip-left" className="services">
            <h1>Our Services</h1> 
            <div className="box-1">
                <div className="col-md-6">
                    <h3>Architecture</h3>
                    <p>Inventing a modern and reliable architecture which will be easy to maintain and will not have to be rewritten</p>
                </div>
                <div className="col-md-6">
                    <h3>IT-Development</h3>
                    <p>Developing high-end websites, mobile applications and chatbots which will stand out among your competitors</p>
                </div>
                <div className="col-md-6">
                    <h3>Design</h3>
                    <p>Designing a unique UI with the best user experience, making your clients enjoy your service</p>
                </div>
                <div className="col-md-6">
                    <h3>Audit</h3>
                    <p>Analyzing your existing application's performance, security, reliability and UX, proposing ways to improve</p>
                </div>
                <div className="col-md-6">
                    <h3>Automation</h3>
                    <p>Automating your workflow, integrating with various CRMs and metrics, speeding up your development and increasing sales</p>
                </div>
                <div className="col-md-6">
                    <h3>Product making</h3>
                    <p>Turning your brilliant ideas into technical documentation for your new awesome product</p>
                </div>
            </div>
            <Link to='/'><button className="btn btn-outline">Learn More</button></Link>
            <GetInTouch/>
        </div>
    )
}

export default Services
