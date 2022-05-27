import React from 'react'

const AddTextArea = ({placeholder, className, rows, cols, id, name}) => {
  return (
    <div>
        <textarea placeholder={placeholder} className={className} rows={rows} cols={cols} id={id} name={name}></textarea>
    </div>
  )
}

export default AddTextArea