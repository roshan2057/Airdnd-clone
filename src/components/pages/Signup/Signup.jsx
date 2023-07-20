import React,{useState} from 'react'
import './signup.css'

const Signup = () => {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [allEntry,setallEntry]=useState([]);
const submitForm=(e)=>{
  e.preventDefault();
 const arr={fname:fname,lname:lname,email:email,password:password}
 setallEntry([...allEntry,arr]);
 console.log(allEntry);
}
  return (
    <>
    <div className='signup'>
        <h1>Create a free account</h1>{'\n'}
        <form action="" onSubmit={submitForm}>
          <div className="fitem specialItem "><button  className="continueButton buttonBlock">Continue with Google</button></div>
          <div className="dash">or</div>
          <div className="signForm">
          <div className="fitem"><input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} autoComplete="false"  placeholder="First Name" size="26" /></div>
          <div className="fitem"><input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} autoComplete="false" placeholder="Last Name"  size="26"/></div>
          <div className="fitem specialItem"><input type="text" onChange={(e)=>setEmail(e.target.value)} autoComplete="false"  value={email} placeholder="Email" size="59" /></div>
          <div className="fitem specialItem"><input type="text" onChange={(e)=>setPassword(e.target.value)} autoComplete="false"  value={password} placeholder="Password" size="59"  /></div>
          <div className="fitem specialItem "><button type="submit" className="continueButton buttonBlock">Continue</button></div>
          </div>
        </form>
    </div>
    </>
  )
}

export default Signup