import React from 'react'

const AddInput = ({id, name, placeholder, className}) => {
  return (
    <div>
        <input type="text" id={id} name={name} placeholder={placeholder} className={className}/>
    </div>
  )
}

export default AddInput