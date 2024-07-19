import React from 'react'
import {Link} from 'react-router-dom'

const Navbars = function(){
    return(
        <>
            <nav className='navbar'>
                <div>
                    <a>QCC</a>
                </div>

                <div className='buttongroup'>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/about">About Us</Link></button>
                    <button><Link to="/contact">Contact Us</Link></button>
                </div>
            </nav>
        </>
    )
}

export default Navbars