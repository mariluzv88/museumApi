import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'





function Museums() {
  const [location,setLocation]= useState('null')
    const getInfo = async() => {
        const response = await axios.get('https://data.cityofnewyork.us/resource/fn6f-htvy.json')
        const info = response.data
        console.log(info)
        setLocation(info)
      }
    useEffect(()=>{
      getInfo()
    },[])
    const loaded = () => {
      return (
        <>
        <div className='locations'>
                <div className='loco'>
                  <h1>Name:{location[0].name}</h1>
                  <h3>Address:{location[0].adress1}</h3>
                  <h3>City:{location[0].city}</h3>
                  <h3>Zip Code:{location[0].zip}</h3>
                  <h2>Number:{location[0].tel}</h2>
                  <h2>Website:{location[0].url}</h2>
                </div>
                <div className='loco'>
                  <h1>Name:{location[1].name}</h1>
                  <h3>Address:{location[1].adress1}</h3>
                  <h3>City:{location[1].city}</h3>
                  <h3>Zip Code:{location[1].zip}</h3>
                  <h2>Number:{location[1].tel}</h2>
                  <h2>Website:{location[1].url}</h2>
                </div>
                <div className='loco'>
                  <h1>Name:{location[2].name}</h1>
                  <h3>Address:{location[2].adress1}</h3>
                  <h3>City:{location[2].city}</h3>
                  <h3>Zip Code:{location[2].zip}</h3>
                  <h2>Number:{location[2].tel}</h2>
                  <h2>Website:{location[2].url}</h2>
                </div>
        </div>
        <div className='locations'>
            <div className='loco'>
              <h1>Name:{location[3].name}</h1>
              <h3>Address:{location[3].adress1}</h3>
              <h3>City:{location[3].city}</h3>
              <h3>Zip Code:{location[3].zip}</h3>
              <h2>Number:{location[3].tel}</h2>
              <h2>Website:{location[3].url}</h2>
            </div>
           
            {/* <div className='loco'>
              <h1>Name:{location[4].name}</h1>
              <h3>Address:{location[4].adress1}</h3>
              <h3>City:{location[4].city}</h3>
              <h3>Zip Code:{location[4].zip}</h3>
              <h2>Number:{location[4].tel}</h2>
              <h2>Website:{location[4].url}</h2>
            </div> */}
            {/* <div className='loco'>
              <h1>Name:{location[5].name}</h1>
              <h3>Address:{location[5].adress1}</h3>
              <h3>City:{location[5].city}</h3>
              <h3>Zip Code:{location[5].zip}</h3>
              <h2>Number:{location[5].tel}</h2>
              <h2>Website:{location[5].url}</h2>
            </div> */}
        </div>
         
        
        </>
      );
    };
  
    // Function for when data doesn't exist
    const loading = () => {
      return <h1>Loading...</h1>;
    };
  
    // if coin has data, run the loaded function, otherwise, run loading
    return location ? loaded() : loading();
}
export default Museums