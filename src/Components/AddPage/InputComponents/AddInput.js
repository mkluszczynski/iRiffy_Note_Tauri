import React from 'react'

const AddInput = ({id, name, placeholder, className, pattern="" }) => {
  return (
    <div>
        <input type="text" id={id} name={name} placeholder={placeholder} className={className} pattern={pattern}/>
    </div>
  )
}

export default AddInput