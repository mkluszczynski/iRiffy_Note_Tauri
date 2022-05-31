import React from 'react'

const AddWorkButton = ({src, alt, onClick, className, classNameImg}) => {
  return (
    <div onClick={onClick} className={className}>
      <img src={src} alt={alt}  className={classNameImg}/>
    </div>
  )
}

export default AddWorkButton