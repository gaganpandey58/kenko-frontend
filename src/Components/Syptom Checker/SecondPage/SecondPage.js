import React, { useState } from 'react';
import Input from '../../AccountLogin/Input';

import './SecondPage.css';

function SecondPage(){
    const [values, setValues] = useState({
        symp: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values.symp);
    }
    return(
        <div className='entersym-container'>
            <div className='entersym-box'>
                <div className='enter'>
                    <div className='enter-heading'>
                        <h1 className='enter-h1'>What are your Symptoms?</h1>
                    </div>
                    <div className='enter-form'>
                        <form className='form-enter' onSubmit={handleSubmit}>
                            {/* <input type="text" placeholder="e.g. headache, fever" /> */}
                            <Input
                               className="form-in"
                               type="text"
                               name="symp"
                               placeholder="e.g. headache, fever"
                               onChange={handleChange}
                               value={values.sym}
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