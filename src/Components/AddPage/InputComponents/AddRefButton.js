import React from 'react'

const AddRefButton = ({title, onClick, className}) => {
  return (
    <div>
        <input type="button" value={title} onClick={onClick} className={className} />
    </div>
  )
}

export default AddRefButton