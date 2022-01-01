import React from 'react';

import './AccountLogin.css';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function AccountLogin() {
    return ( 
      
       <div className="accountlogin">  
     <div className='login-btn' >
         <Button size="medium" className='button' href="#outlined-buttons">
        Login/Register
      </Button>
      </div>  

      <div className="accounticon">
      <AccountCircleIcon /> 
      </div>
  
        </div>
       
           
        );
}

export default AccountLogin;