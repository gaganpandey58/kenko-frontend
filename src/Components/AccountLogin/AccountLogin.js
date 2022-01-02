import React from 'react';

import './AccountLogin.css';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function AccountLogin() {
    return ( 
      
       <div className="accountlogin">  
     <div className='login-btn' >
         <Button size="small" className='button' href="#outlined-buttons">
        Log in
      </Button>
     </div>  
<div className="register-btn"> <Button size="small" className='button' href="#outlined-buttons">
        Get Started
      </Button></div>
      <div className="accounticon">
      <AccountCircleIcon /> 
      </div>
  
        </div>
       
           
        );
}

export default AccountLogin;