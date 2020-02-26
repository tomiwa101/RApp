import React from 'react';

const FaceRecognition = ({ displayImage }) => {
    return (
        <div className='center'>
         <img 
          className='absolute mt2 pa2'
          alt='' 
          src = {displayImage}
          width = '500px' 
          height = 'auto'
         />
        </div>
    );
}

export default FaceRecognition;