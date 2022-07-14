import './comp.css'
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import {loginFunc, signupFunc, modifInp} from '../logics/logic1';
import './comp.css';

const LoginForm = (props) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("Login");
    const [login, setLogin] = useState(true);
    const location = useLocation();
    const [loginCred, setLoginCred] = useState({contact: "", userName: "", password: ""});
    const [confirmPasswd, setConf] = useState("");

    useEffect(()=>{
        setLogin(location.state.login);
    }, [location.state.login])

    const accessAcc = async(e) =>{
            e.preventDefault();
            if (login){
                var resp = await loginFunc(loginCred);
                // login to home if successful
                if(resp.message === "Successful"){
                    localStorage.setItem("userId", resp.userId);
                    navigate("/home", {state: {userId: resp.userId}});
                }else{
                    setMessage("Check Your Credentials")
                }
            }else{
                if (confirmPasswd === loginCred.password){
                    var resp = await signupFunc(loginCred);
                    alert(resp);
                }
                
            }
    }
  return (
    <form className='loginForm' onSubmit={accessAcc}>
        <label>{(!login && <p>Sign Up</p>) || (login && <p>{message}</p>)}</label>

        {!login && <input type='text' placeholder="phone/email" required value={loginCred.contact} onChange={(e)=>setLoginCred(prev=>({...prev, contact: e.target.value}))} />}

        <input type='text' required placeholder='username' value={loginCred.userName} onChange={(e)=>setLoginCred(prev=>({...prev, userName: e.target.value}))} />

        <input type='text' required placeholder='password' value={loginCred.password} onChange={(e)=>setLoginCred(prev=>({...prev, password: e.target.value}))} />

        {!login && <input type="text" placeholder='confirm password' value={confirmPasswd} required onChange={(e)=>setConf(e.target.value)} />}

        {!login && <button type='submit' className='btn1'>Sign Up</button>}
        {login && <button type='submit' className='btn1'>Login</button>}

        {login && <a href='' >Forgot Password?</a>}
        {login && <a onClick={()=>{setLogin(false)}}>Create Account</a>}
        {!login && <a onClick={()=>setLogin(true)}>Login Instead?</a>}
    </form>
  )
}

export default LoginForm
