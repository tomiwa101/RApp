import React from 'react';


const Rank = ({ name, entries }) => {
    return (
        <div className='tc'>
         <div className='white f4'>
             {name + ', your current entry count is ...'}
         </div>
         <div className='white f4'>
             {entries}
         </div>
        </div>
    );
}

export default Rank;