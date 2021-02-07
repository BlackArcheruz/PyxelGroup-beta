import {useState} from 'react';

const Input = () => {
const [msg,setMsg] = useState('');
const [text,setText] = useState('');
const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(text);
} 
const onClick = ()=>{
    if(!re.test(text)){
        setMsg('Please check your email !');
    }else{
        setMsg('Thank you !');
    }
}

    return (
        <form className="con-input" onSubmit={handleSubmit}>
            <input type="email" placeholder="VERIFY YOUR EMAIL" onChange={(e)=>setText(e.target.value)} className="email" />
            <input type="submit" value="SEND" className="btn btn-outline input" onClick={onClick}/>
            <h1>{msg}</h1>
        </form>
    )
}

export default Input
