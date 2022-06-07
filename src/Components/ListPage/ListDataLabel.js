import React from 'react'

const ListDataLabel = ({dataToShow, className}) => {
  return (
    <div className={className}>
        <h3>{dataToShow}</h3>
    </div>
  )
}

export default ListDataLabel