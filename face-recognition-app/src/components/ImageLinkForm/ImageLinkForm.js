import React from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends React.Component {
    render(){
        const { onInputChange, onButtonClick, onEnter } = this.props;
        return (
            <div className = 'tc' style = {{ fontFamily: "'Courier New', Courier, monospace" }}>
             <div className = 'ma2'>
              <p className='f3'>{'This magic brain displays images, try it out!'}</p>
             </div>
             <div className='center'>
              <div className = 'center form br3 shadow-5 pa4' >
               <input 
                type="text" 
                className = 'f4 pa2 w-70'
                onChange = {onInputChange}
                onKeyUp = {onEnter}
               />
               <button 
               type="'button"
               className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
               style = {{ border: 'none', padding: '' }}
               onClick = {onButtonClick}
               >Detect</button>
              </div>
             </div>
            </div>
        );
    }
    
}



export default ImageLinkForm;