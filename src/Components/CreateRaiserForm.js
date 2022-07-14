import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './comp.css'
import {createRaiser} from '../logics/logic1'
import { useNavigate } from 'react-router-dom';

const CreateRaiserForm = (props) => {
    const userId = localStorage.getItem("userId");
    const [show, setShow] = useState("none");
    const navigate = useNavigate();
    const [raiser, setRaiser] = useState({userId: userId, title: "", description: "", beneficName: "", beneficTel: "", total: "", target: ""});

    const startRaiser = async(e) =>{
        e.preventDefault();
        if (userId !== null || typeof(userId) !== "undefined"){
            let raiserDetails = {userId: raiser.userId, title: raiser.title, description: raiser.description, beneficiary: {name: raiser.beneficName, contact: raiser.beneficTel}, total: raiser.total, target: raiser.target};
            await createRaiser(raiserDetails)
            .then((res)=>console.log(res));
        } else {
            navigate("/loginsignup", {state: {login: true}});
        }
        
    }
    const showExtra = (e) =>{
        setShow(e.target.value)
    }
    const handleChange = (e, target) =>{
        switch(target){
            case 't': {//title
                setRaiser(prev=>({...prev, title: e.target.value}));
            }break;
            case 'n': { //name of recepient
                setRaiser(prev=>({...prev, beneficName: e.target.value}));
            }break;
            case 'c': { // contact of recepient
                setRaiser(prev=>({...prev, beneficTel: e.target.value}));
            }break;
            case 'd': { // description
                setRaiser(prev=>({...prev, description: e.target.value}));
            }break;
            case 's': { // sum, total
                setRaiser(prev=>({...prev, total: e.target.value}));
            }break;
            case 'g': { // target
                setRaiser(prev=>({...prev, target: e.target.value}));
            }break;
        }
    }
  return (
    <form onSubmit={startRaiser} className="createForm" >
        <input placeholder="title eg(Jane's Hospital Bill)" required value={raiser.title} onChange={(e)=>handleChange(e, 't')}/>
        <select placeholder='myself' onChange={showExtra}>
            <option value={'none'}>Beneficiary is Myself</option>
            <option value={'block'}>Beneficiary is Someone Else</option>
        </select>

        <input style={{"display": `${show}`}} value={raiser.beneficName} onChange={(e)=>handleChange(e, 'n')} type='text' placeholder="beneficiary's name" />

        <input  style={{"display": `${show}`}} value={raiser.beneficTel} onChange={(e)=>handleChange(e, 'c')} type="tel" placeholder="beneficiary's contact" />

        <textarea value={raiser.description} onChange={(e)=>handleChange(e, 'd')} placeholder='description'></textarea>

        <input type='number' value={raiser.total} onChange={(e)=>handleChange(e, 's')} min='0' placeholder='How much do you have so far? (in Ksh)'/>

        <input type='number' min='0' value={raiser.target} onChange={(e)=>handleChange(e, 'g')} placeholder='How much do you aim to raise? (in Ksh)'/>

        <button className='btn1'>Start Fundraiser</button>
    </form>
  )
}

export default CreateRaiserForm