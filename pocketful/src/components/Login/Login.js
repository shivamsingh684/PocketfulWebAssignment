import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import InputController from "../InputController/InputController";
import { signInWithEmailAndPassword } from 'firebase/auth'
import "../../index.css"
import { auth } from '../../firebase'




function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("*Fill all fields*");     
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);

                navigate('/home');
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };
    
    const showAlert = () => {
          alert("Failing some issue on Google and Github login buttons");
        }
    return (
        <>
            <div className="container">
                <div className="innerbox">
                    <img className="rocket" src="https://thumbs.dreamstime.com/t/rocket-launch-concept-smoke-illustrated-animation-141586398.jpg" />
                    <div className="heading">
                        <h1 >Welcome to Bardeen</h1>
                        <p>Lets's log in to launch your automations</p>
                    </div>
                    <div className="content">
                        <InputController label="" placeholder="Email Address"
                            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                        />
                        <InputController label="" placeholder="Passsword"
                            onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
                        />

                        <div className="footer">


                            <span>
                                <Link className="link" to='/signup'>Create Account</Link>
                            </span>
                            <span>
                                <Link className="link" to=''>Forget Password?</Link>
                            </span>


                        </div>
                        <b >{errorMsg}</b>
                        <button className="signIn" disabled={submitButtonDisabled} onClick={handleSubmission}>Sign in</button>
                        <div className="google">
                            <button className="other" onClick={showAlert}><img className="smallImg" src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" />
                                <span>Sign in with Google</span>
                            </button>
                            <button className="other" onClick={showAlert}><img className="smallImg" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                                <span>Sign in with Github</span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default Login