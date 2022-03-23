import React, { useState } from 'react';
import Input from '../../AccountLogin/Input';
import DropDown from './DropDown';

import './SecondPage.css';
import ShowSymp from './ShowSymp';
import symptoms from '/home/gagan/Documents/7th sem/Project/Project/src/Components/Data/symptoms.json'

function SecondPage(){
    const[value, setValue] = useState(null);
    const [symptom, setSymptom] = useState('');
    const [data, setData] = useState([]);

    // const handleChange = e => {
    //     const inputs = e.target.value;
    //     console.log(inputs)
    // };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("CLicked")
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
                    {/* <div className='enter-form'>
                        <form className='form-enter' onSubmit={handleSubmit}>
                            <Input
                               className="form-in"
                               type="text"
                               name="symp"
                               placeholder="e.g. headache, fever"
                               onChange={handleChange}
                               value={symptom}
                            />
                            <button type="submit" className='add'>Add</button>
                        </form>
                    </div> */}
                    <div className='enter-form'>
                        <div className='form-enter'>
                            <DropDown 
                                symptoms={symptoms} 
                                prompt="Select your symptoms..." 
                                value={value}
                                id="id"
                                label="name"
                                onChange={val => setValue(val)}
                                // onChange={handleChange}
                            />
                            <button className='add' onClick={handleSubmit}>ADD</button>
                        </div>
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