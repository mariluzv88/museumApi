import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/App_context'
import Listed from './Listed'

function Visited() {
    // let {visit} = useContext(AppContext)
    // let {location}= useContext(AppContext)
  return (
    <div>
        <header>VISITED</header>
        <ul>
            {/* conditional rendering */}
            {/* {visit.length > 0? 
            location.map((seen)=>{
                return <Listed muse={seen}/>
            }):null} */}
        </ul>
    </div>
  )
}

export default Visited