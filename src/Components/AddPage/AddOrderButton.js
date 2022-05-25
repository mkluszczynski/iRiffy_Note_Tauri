import React from 'react'

const AddOrderButton = ({onClick, buttonTitle, className}) => {
  return (
    <div>
        <input type="button" onClick={onClick} value={buttonTitle} className={className}/>
    </div>
  )
}

export default AddOrderButton