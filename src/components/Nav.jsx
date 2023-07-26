import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
        <div>home page</div>
        </Link>
        <Link to='/checklist'>
        <div> Museum Checklist</div>
        </Link>
        <Link to='/museums'>
        <div> Museum Locations</div>
        </Link>
        
    </div>
  )
}

export default Nav