import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom'
import InputController from "../InputController/InputController";
import{createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {auth} from '../../firebase'
function Signup() {
    const navigate=useNavigate();
    const [values,setValues]=useState({
        name:'',
        email:'',
        pass:''
    });
    
    const [errorMsg,setErrorMsg]=useState("")
    const [submitButtonDisable,setSubmitButtonDisable]=useState(false)
    const handel=()=>{
        if(!values.name || !values.email ||!values.pass){
            setErrorMsg('Fill all fields');
            return
        }
        setErrorMsg('')
        setSubmitButtonDisable(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass).then(
            (res) => {
                setSubmitButtonDisable(false);
                const user=res.user;
                updateProfile(user,{
                    displayName:values.name
                })
             navigate('/home')
            })
            .catch((err) => {
                setSubmitButtonDisable(false)
                setErrorMsg(err.message)
            })
    }

    return (
      <>
         <div className="container">
             <div className="innerbox2">
             <img className="rocket" src="https://thumbs.dreamstime.com/t/rocket-launch-concept-smoke-illustrated-animation-141586398.jpg"/>
             <div className="heading">
                 <h1 >Welcome to Bardeen</h1>
                 <p>Lets's log in to launch your automations</p>
                 </div>
                 <div className="content">
                 <InputController label="" placeholder="Enter your name"
                    onChange={event=>setValues(prev=>({...prev,name:event.target.value}))}
                 />
                 <InputController label="" placeholder="Enter your email address"
                    onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}
                 />
                 <InputController label="" placeholder="Enter Passsword"
                    onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}
                 />
 
                 <div className="footer">
                     
                    <p>
                      Already have an account?{" "}
                       <span className="link">
                       <Link style={{textDecoration: 'none'}} to ='/'>Login</Link>
                       </span>
                    </p>
                     
                 </div>
                 <b>{errorMsg}</b>
                 <button className="signIn" onClick={handel} disabled={submitButtonDisable}>Create Account</button>
                 <div className="google">
                     <button className="other"><img className="smallImg" src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"/>
                     <span>Sign up in with Google</span>
                    </button>
                    <button className="other"><img className="smallImg" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                     <span>Sign up in with Github</span>
                    </button>
                     
                 </div>
                 </div>
 
             </div>
         </div>
      </>
    )
    
 }
export default Signup