import React from 'react';

const RenderField = ({ input, type, placeholder, id, meta: { touched, error } }) => (
  <span>
    <span>
      <input {...input} type={type} placeholder={placeholder} id={id}/>
      {touched && error && <span>{error}</span>}
    </span>
  </span>
)

export default RenderField
