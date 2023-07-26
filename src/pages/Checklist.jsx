import React from 'react'
import Visited from '../components/Visited'
import List from '../components/List'


function Checklist() {
  return (
    <div className='check'>
        <div className='muse' >
          <List/>   
        </div>
        <div className='muse'>
          <Visited/>   
        </div>
       
    </div>
  )
}

export default Checklist