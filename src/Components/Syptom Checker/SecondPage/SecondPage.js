import React from 'react';
import Input from '../../AccountLogin/Input';

import './SecondPage.css';

function SecondPage(){
    return(
        <div className='entersym-container'>
            <div className='entersym-box'>
                <div className='enter'>
                    <div className='enter-heading'>
                        <h1 className='enter-h1'>What are your Symptoms?</h1>
                    </div>
                    <div className='enter-form'>
                        <form className='form-enter'>
                            {/* <input type="text" placeholder="e.g. headache, fever" /> */}
                            <Input
                            //    className="signin-input"
                               type="text"
                               
                            //    onChange={handleChange} 
                            />
                            <button type="submit" className='add-button'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage;