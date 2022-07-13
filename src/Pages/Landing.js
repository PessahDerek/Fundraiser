import React from 'react'
import Navbar from '../Components/Navbar';
import './pagestyle.css';
import illustration from '../images/saving.png';
import {useNavigate} from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const getin = (user) =>{
        if (user){
            navigate("/loginsignup", {state: {login: true}});
        }else{
            navigate("/loginsignup", {state: {login: false}});
        }
    }
  return (
    <div className='landing'>
        <Navbar />
        <section className='body'>
            <div className='introTxt'>
                <ul>
                    <li>Totally free</li>
                    <li>Donors can remain anonimous</li>
                    <li>avoid fraudelent fundraisers</li>
                    <li>do not worry about the math</li>
                    <li>transparency to your contributors</li>
                    <li>set fundraiser visible globally and get donations from people outside your circle</li>
                </ul>
                <div className='loginSignup'>
                    <button className='btn1' onClick={()=>getin(false)} >Sign Up</button>
                    <button className='btn1' onClick={()=>getin(true)}>Sign In</button>
                </div>
            </div>
            <img src={illustration} alt="harambee illustration" />
        
        </section>
        
        
    </div>
  )
}

export default Landing