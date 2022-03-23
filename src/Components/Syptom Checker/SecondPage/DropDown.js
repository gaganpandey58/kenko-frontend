import React from 'react';

import './DropDown.css';

function DropDown() {
    return (
        <div className='dropdown'>
            <div className='control'>
                <div className='selected-value'>
                    <input className='input-value' type='text' />
                </div>
                <div className='arrow'></div>
            </div>
            <div className='options'>
                
            </div>
        </div>
    )
}

export default DropDown;