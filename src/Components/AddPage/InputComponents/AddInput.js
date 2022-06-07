import React from 'react'

const AddInput = ({id, name, placeholder, className, pattern="", value }) => {
  return (
    <div>
        <input type="text" id={id} name={name} placeholder={placeholder} className={className} pattern={pattern} value={value}/>
    </div>
  )
}

export default AddInput