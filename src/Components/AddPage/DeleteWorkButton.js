import React from 'react'

const DeleteWorkButton = ({imgSrc, alt, className, classNameImg, onClick}) => {
  return (
    <div onClick={onClick} className={className}>
        <img src={imgSrc} alt={alt} className={classNameImg}/>
    </div>
  )
}

export default DeleteWorkButton