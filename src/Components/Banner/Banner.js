import React from 'react';
import Button from '../Button/Button';

import './Banner.css'

function Banner() {
    return (
        <div className='container'>
            <div className='banner-text'>
                <div className='b-text'>
                    <h1 className='h1-text'>Predict Your Disease</h1>
                    <h3 className='h3-text'>Identify possible conditions and treatment related to your symptoms.</h3>
                    <p className='para-text'>Tell us a bit about yourself and how you’re feeling for suggested next steps and common treatment plans.</p>
                </div>
            </div>

            <div className='btn-box'>
                <Button onClick={() => {alert("Site Under Construction!")}}>Check Now</Button>
            </div>

            <div className='banner-image'>
                <div className='b-img'>
                    <img src={require('./kenko-png.png')} />
                </div>
            </div>
        </div>
    );
}

export default Banner;