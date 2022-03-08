import React from 'react';

import './SignUp.css';
import Input from '../AccountLogin/Input';
import useForm from '../AccountLogin/useForm';
import validate from '../AccountLogin/validateInfo';
import kenko from '../images/kenko-png.png';

function SignUp(){

    const {handleChange, handleSubmit, values, errors} = useForm(validate);
    
    return(
        <section>
            
                                
            <h2 className="heading">Sign Up to Kenko</h2>             
            <div className="container">
            
                    <div className="box">
                        <div className="left-column">
                            <div className="left-wrapper">
                                <img src={kenko} />
                                {/* <h6>Disease Prediction System</h6> */}
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
                                    /></div>  

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
                                    <Input 
                                        label="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <p>{errors.password}</p>}</div>  

                                <div className='pcsec'>
                                <Input 
                                    label="PhoneNo"
                                        id="PhoneNo"
                                        name="PhoneNo"
                                        type="text"
                                        value={values.PhoneNo}
                                        onChange={handleChange}
                                    />
                                     <Input 
                                        label="ConfirmPassword"
                                        id="CPassword"
                                        name="CPassword"
                                        type="password"
                                        value={values.CPassword}
                                        onChange={handleChange}
                                    />
                                    </div>    
                                     <Input 
                                    label="Gender"
                                        id="Gender"
                                        name="Gender"
                                        type="text"
                                        value={values.Gender}
                                        onChange={handleChange}
                                    />
                                    


                                    <button className="signup-button">Sign Up</button>
                                </form>
                            </div>
                                {/*  ) : (
                                     <div className="form-box">
                                         <SignInPhone />
                                     </div>
                                 )}   */}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default SignUp;