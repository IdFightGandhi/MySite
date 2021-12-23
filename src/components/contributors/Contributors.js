import React from 'react'
import './contributors.css';
import face from '../../assets/ai.png'

const Contributors = () => {
    return (
        <div className ="artist__section">
            <div className = "artist__row">
                <div className="artist__block">
                    <img src = {face} />
                </div>
                <div className="artist__block">
                    <img src = {face} />
                </div>
            </div>
            <div className="artist__row">
                <div className="artist__block">
                    <img src = {face} />
                </div>
                
                <div className="artist__block">
                    <img src = {face} />
                 </div>
            </div>
            Feature
        </div>
    )
}

export default Contributors
