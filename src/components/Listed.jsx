import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/App_context'

function Listed(props) {
    let {location} = useContext(AppContext)
  return (
    <li> <h1>Name:{location[0].name}</h1>
    <h3>Address:{location[0].adress1}</h3>
    <h3>City:{location[0].city}</h3>
    <h3>Zip Code:{location[0].zip}</h3>
    <h2>Number:{location[0].tel}</h2>
    <h2>Website:{location[0].url}</h2></li>
  )
}

export default Listed