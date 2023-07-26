import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/App_context'

function Listed(props) {
    
  return (
    <li>{props.muse}</li>
  )
}

export default Listed