import React from 'react'
import { useContext,useEffect } from 'react'
import { AppContext } from '../contexts/App_context'
import Listed from './Listed'

function Visited() {
    let {visit} = useContext(AppContext)
    let {getInfo}= useContext(AppContext)
    let {location}= useContext(AppContext)
    // useEffect(()=>{
    //   getInfo()
    // },[])
  return (
    <div>
        <header>VISITED</header>
        <ul>
             
             {/* {visit[0].length > 0? 
            location.data.map((seen)=>{
                return <Listed muse={seen}/>
            }):null}  */}
        </ul>
    </div>
  )
}

export default Visited