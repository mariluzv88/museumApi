import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'


function Main(props) {
    const [details,setDetails]= useState('null')
    const getDetails = async() => {
        const response =  await axios.get('https://ny.usa.museum-digital.org/index.php?t=collection&output=json')
        const info = response.data
        setDetails(info)
        console.log(info)
      }
      
  useEffect(()=>{
   
    getDetails()
  },[])
  const loaded = () => {
    return (
      <div className='home'>
        <h1>
         Museums In New York City
        </h1>
          {/* <img src={details[0].institution_image}/>
        <h1>
          {details[1].institution_name}/
          <img src={details[1].institution_image}/>
        </h1>
        <h1>
          {details[2].institution_name}/
          <img src={details[2].institution_image}/> */}
        {/* </h1> */}
       
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return details  ? loaded() : loading();
};
export default Main