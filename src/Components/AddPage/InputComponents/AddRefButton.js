import React from 'react'

const AddRefButton = ({title, onClick, className}) => {
  return (
    <div onClick={onClick}>
        <input type="button" value={title}  className={className} />
    </div>
  )
}

export default AddRefButton