import React from 'react';

export default function ValidateError(props) {

  if (props.message) {
    return (
      <div className='error'>
        {props.message}
      </div>
    )
  }

  return <></>
}