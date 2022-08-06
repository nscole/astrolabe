import React from 'react'

function test2popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default test2popup;