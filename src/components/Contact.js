import {useEffect,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    const [msg,setMsg] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(email);
  } 
    const onClick = ()=>{
      if(!re.test(email)&& text === ''){
          setMsg('Please check your email address and Your Name !');
      }else{
          setMsg('Thank you !');
      }
  }
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <div className="showcase-container">
            <form className="contact" onSubmit={handleSubmit} action="mail">
            <h1>Contact</h1>
            <label>Your Name:</label>
            <input type="text" placeholder="John Doe" className="email" onChange={(e)=>setText(e.target.value)}/>
            <label>Your Email: </label>
            <input type="email" placeholder="mail@example.com" className="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label>What are you interested in?</label>
            <textarea placeholder="What is your Idea, tell us and we make it alive !" className="email textarea"></textarea>
            <input type="submit" value="SUBMIT" className="btn btn-outline input cont-btn" onClick={onClick}/>
            <div className="clear"></div>
            <h1>{msg}</h1>
        </form>
        </div>
    )
}

export default Contact
