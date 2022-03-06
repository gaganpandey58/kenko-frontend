import React from 'react';

import './SignIn.css';
import Input from './Input';
import useForm from './useForm';
import validate from './validateInfo';
import kenko from './kenko-png.png';

function SignIn(){

    const {handleChange, handleSubmit, values, errors} = useForm(validate);
    
    return(
        <section>
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
                            <div className="form-header">
                                <h2 className="heading">Sign in to Kenko</h2>
                            </div>
                            {/* {!viewSignInPhone ? ( */}
                            <div className="form-box">
                                <form onSubmit={handleSubmit} className='input-field'>
                                    <Input 
                                        autoFocus
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
                                    {errors.password && <p>{errors.password}</p>}
                                    <button className="signin-button">Sign In</button>
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

export default SignIn;