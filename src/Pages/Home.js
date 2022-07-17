import React, { useEffect, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useLocation, useNavigate } from 'react-router-dom'
import ActiveStats from '../Components/ActiveStats'
import CreateRaiserForm from '../Components/CreateRaiserForm'

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  
  useEffect(()=>{
    // make sure there's userId
    let localCacheId = localStorage.getItem("userId");
    if (localCacheId === "" || localCacheId === null || typeof(localCacheId) === 'undefined'){
      if (location.state.userKeys.userId === null){
        navigate("/loginsignup");
      }else{
        setUserId(location.state.userId);
      }
    }else{
      setUserId(localCacheId )
    }
  })
  
  return (
    <div className='home'>
      <nav className='top'>
        <h1>Fundraiser</h1>
        
      </nav>
      <section>
        <ActiveStats />
        <button onClick={()=>navigate("createraiser")} >Create Fundraiser</button>
      </section>
    </div>
  )
}

export default Home