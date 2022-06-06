import React from 'react'

const NoDataInfo = ({infoToShow, className}) => {
  return (
    <div className={className}>
        <h1>{infoToShow}</h1>
    </div>
  )
}

export default NoDataInfo