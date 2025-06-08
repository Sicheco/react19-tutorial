import React from 'react';
import { createPortal } from 'react-dom';

function PopupContent({copied}) {
  return createPortal(
    <div>
      {copied && (
        <div style={{position: 'absolute', top: '3rem'}}>Copied to Clipboard</div>
      )}
    </div>, 
    document.querySelector('#popup-content')
  );
};

export default PopupContent;