import React from 'react';

import './SignUp.css';
import Input from '../AccountLogin/Input';
import useForm from '../AccountLogin/useForm';
import validate from '../AccountLogin/validateInfo';
import kenko from '../images/kenko-png.png';

function SignUp(){

    const {handleChange, handleSubmit, values, errors} = useForm(validate);
    
    return(
        <div>
            
            <h2 className="heading">Sign Up to Kenko</h2>             
            <div className="signupcontainer">
               <div className="box">
                        <div className="left-column">
                            <div className="left-wrapper">
                                <img src={kenko} />
                            </div>
                        </div>
                        <div className="right-column">
                                <div className="right-wrapper">
                                    <img src={kenko} />
                                </div>
                            
                            {/* {!viewSignInPhone ? ( */}
                            <div className="form-box">
                                <form onSubmit={handleSubmit} className='input-field'>
                            <div className='namesection'>
                            <Input
                                    autoFocus
                                    name="FirstName" 
                                    type="text"
                                    id="FirstName"
                                    label="FirstName" 
                                    value={values.FirstName}
                                    onChange={handleChange}
                                    />
                                      <Input 
                                    label="LastName"
                                        id="LastName"
                                        name="LastName"
                                        type="text"
                                        value={values.LastName}
                                        onChange={handleChange}
                                    />
                                    </div>  

                                 <div className='epsec'> 
                                 <Input 
                                    label="Username or Email Address"
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={values.username}
                                        onChange={handleChange}
                                    />
                                    {errors.username && <p>{errors.username}</p>}
                                  </div>  

                                <div className='pcsec'>
                                <Input 
                                        label="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <p>{errors.password}</p>}
                                     <Input 
                                        label="ConfirmPassword"
                                        id="CPassword"
                                        name="CPassword"
                                        type="password"
                                        value={values.CPassword}
                                        onChange={handleChange}
                                    />
                                    </div>    
                                   


                                    <button className="signin-button">Sign Up</button>
                                </form>
                            </div>
                              
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SignUp;