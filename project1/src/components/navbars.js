import React from 'react'
import {Link} from 'react-router-dom'

const Navbars = function(){
    return(
        <>
            <nav className='navbar'>
                <div className='name'>
                    <a>Es' Library</a>
                </div>

                <div className='buttongroup'>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/general">General Recommendations</Link></button>
                    <button><Link to="/personal">Personal Recommendations</Link></button>
                </div>
            </nav>
        </>
    )
}

export default Navbars