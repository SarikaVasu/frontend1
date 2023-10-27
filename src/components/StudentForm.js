import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';

const StudentForm = (props) => {
    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [rollNo, setRollNo] = useState(props.rollNoValue);

    useEffect (()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    },[props.nameValue, props.emailValue, props.rollNoValue]);
    
    const arr = [name,email,rollNo];

    const handleClick = () => {
        props.getState(arr);
    }

  return (
    <div style={{maxWidth:"40%",margin:"0px auto"}}>
        <input defaultValue = {props.nameValue} 
            type="text" 
            className="form-control my-2" 
            placeholder='Enter your name' 
            
            onChange={(event)=>setName(event.target.value)}/>
        <input defaultValue = {props.emailValue} 
            type="text" 
            className="form-control my-2" 
            placeholder='Enter your email' 
            onChange={(event)=>setEmail(event.target.value)}/>
        <input defaultValue = {props.rollNoValue} 
            type="text" 
            className="form-control my-2" 
            placeholder='Enter your roll no' 
            onChange={(event)=>setRollNo(event.target.value)}/>
        <button className="btn btn-success my-2 d-block mx-auto" type="submit" onClick={handleClick}>Submit</button>

    </div>
  )
}

export default StudentForm