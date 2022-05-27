import React from 'react'

const DeleteWorkButton = ({imgSrc, alt, className, classNameImg, onClick}) => {
  return (
    <div className={className}>
        <img src={imgSrc} alt={alt} onClick={onClick} className={classNameImg}/>
    </div>
  )
}

export default DeleteWorkButton