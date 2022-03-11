import React, { useState } from 'react';
import Input from '../../AccountLogin/Input';

import './SecondPage.css';
import ShowSymp from './ShowSymp';

function SecondPage(){
    const [symptom, setSymptom] = useState('');
    const [data, setData] = useState([]);

    const handleChange = e => {
        setSymptom(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setData([...data, {item: symptom, key: Date.now()}]);
        console.log("task=", data);
        setSymptom('');
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
                               value={symptom}
                            />
                            <button type="submit" className='add-button'>Add</button>
                        </form>
                    </div>
                </div>
                <div className='showsymp'>
                    <div>
                        <ShowSymp data={data} setData = {setData} />
                    </div>
                </div>
                <button className='add-button'>Continue</button>
            </div>
        </div>
    )
}

export default SecondPage;