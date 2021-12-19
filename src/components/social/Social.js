import React, {useState} from 'react'
import './social.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faYoutube, faTwitch, faInstagram} from '@fortawesome/free-brands-svg-icons'



const Social = () => {

    const [over, setOver] = useState(false);
    return (
        <div className="soup__social section" 
            style={
                {display:'flex', 
                alignItems:'center', 
                justifyContent:'center', 
                cursor:'pointer', }}>
            
            {/* onMouseOver={()=> setOver(true)}
            onMouseLeave={()=> setOver(false)} */}

            <FontAwesomeIcon className="fa-icon" icon={faYoutube} >
            </FontAwesomeIcon>
            <FontAwesomeIcon className="fa-icon"icon={faInstagram} >
            </FontAwesomeIcon>
            <FontAwesomeIcon className="fa-icon"icon={faTwitter} >
            </FontAwesomeIcon>
            <FontAwesomeIcon className="fa-icon"icon={faTwitch} >
            </FontAwesomeIcon>

                
        </div>
    )
}

export default Social