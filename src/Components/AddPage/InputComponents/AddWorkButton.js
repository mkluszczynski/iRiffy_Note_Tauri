import React from 'react'

const AddWorkButton = ({src, alt, onClick, className, classNameImg}) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} onClick={onClick} className={classNameImg}/>
    </div>
  )
}

export default AddWorkButton