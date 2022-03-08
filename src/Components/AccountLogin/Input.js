import React from 'react';

const Input = ({ name, type, label, onChange, value }) => (
    <div className="form-group">
        <label htmlFor={name}><b>{label}</b></label>
            <input  
                name={name}
                id={name} 
                type={type}
                onChange={onChange}
                value={value}
            />
    </div>
);

export default Input;