import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <Tilt className="Tilt br2 shadow-2 ma3" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
         <div className="Tilt-inner" style={{ display: 'flex' }}> <img alt="brain" src="https://purepng.com/public/uploads/large/brain-outline-i4u.png" style ={{ height: '140px', margin: 'auto', paddingTop: '5px'}}></img> </div>
        </Tilt>
    );
}

export default Logo;