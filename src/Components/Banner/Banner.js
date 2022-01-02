import React from 'react';

import './Banner.css'
function Banner() {
    return (
        <div className='container'>
            <div className='banner-text'>
                <div className='b-text'>
                    <h1>Predict Your Disease</h1>
                    <h3>Identify possible conditions and treatment related to your symptoms.</h3>
                    <p>Tell us a bit about yourself and how you’re feeling for suggested next steps and common treatment plans.</p>
                </div>
            </div>
            <div className='banner-image'>
                <div className='b-img'>
                    <img src="doc.png" alt="Doctor" height="300px" width="300px" />
                </div>
            </div>
        </div>
    );
}

export default Banner;