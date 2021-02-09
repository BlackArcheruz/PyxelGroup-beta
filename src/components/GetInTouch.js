import Input from './Input'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const GetInTouch = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <div data-aos="flip-up" className="get-in-touch g-i-t-container">
            <h2>STAY INFORMED <br/> WITH OUR NEWSLETTER</h2>
            <p>You can get any news about us in your email</p>
            <Input/>
        </div>
    )
}

export default GetInTouch
