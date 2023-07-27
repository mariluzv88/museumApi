import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'





function Museums() {
  const [location,setLocation]= useState(null)
    const getInfo = async() => {
        const response = await axios.get('https://data.cityofnewyork.us/resource/fn6f-htvy.json')
        const info = response.data
        console.log(info)
        setLocation(info)
      }
    useEffect(()=>{
      getInfo()
    },[])
    
      return (
        
        <div className='location'>
                
                  {location? location.map((element,i)=>{
                    return <div className='loco' key={i}>
                      <h1>Name:{element.name}</h1>
                    <h3>Address:{element.adress1}</h3>
                    <h3>City:{element.city}</h3>
                    <h3>Zip Code:{element.zip}</h3>
                    <h2>Number:{element.tel}</h2>
                    <h2>Website:{element.url}</h2></div>
                    
                  }):<p>Loading</p>}
                
                
        </div>
       
         
        
        
      );
    
  
   
   
}
export default Museums