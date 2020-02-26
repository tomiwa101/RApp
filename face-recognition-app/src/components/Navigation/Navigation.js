import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
             <p onClick = {() => onRouteChange('signin')} className='link right fw4 db black dim pointer pa3'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <div>
             <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
              <p onClick = {() => onRouteChange('signin')} className='link right fw4 db black dim pointer pa3'>Sign In</p>
              <p onClick = {() => onRouteChange('register')} className='link right fw4 db black dim pointer pa3'>Register</p>
             </nav>
            </div>
        );
    }
    
}

export default Navigation;