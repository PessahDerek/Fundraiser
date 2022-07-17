import React, {useEffect, useState} from 'react';
import { getraisers } from '../logics/logic1';
import './comp.css';

const ActiveStats = () => {
  const [details, setDetails] = useState({title: "Jane's", target: 200000, diff: 15000})
  const [perc, setPerc] = useState((details.diff/details.target * 100).toFixed(0));
  const [col, setCol] = useState("red");
  var styled = {
    backgroundImage: `conic-gradient(${col} ${perc}%, white ${100-perc}%)`
  }

  useEffect(()=>{
    // fetch data
    const getData = async() =>{
      try {
        const key = localStorage.getItem("raiserKey");
        await getraisers(key).
        then((res)=>console.log(res));
      } catch (error) {
        console.log('haiko');
      }
    }
    if (perc >= 55){
      setCol("green");
    }
    if(perc === 100){
      // send notification
    }
    getData();
  }, [perc])

  return (
    <div className='activeStats'>
        <section className='myraisers'>
            <div style={styled} className='progress'>
              <div> <h2>{perc}%</h2></div>
            </div>
            <div className='info'>
              <h2>{details.title}</h2>
              <h2>{details.target}</h2>
              <h2>{details.diff}</h2>
              <button >View Fundraiser</button>
            </div>
        </section>
    </div>
  )
}

export default ActiveStats