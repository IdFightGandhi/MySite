import React from 'react'
import './social.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faYoutube, faTwitch, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FaYoutube} from'react-icons/fa';
import {IconContext} from 'react-icons';


const Social = () => {
    return (
        <div className="soup__social section" style={{display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', }}>
            
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