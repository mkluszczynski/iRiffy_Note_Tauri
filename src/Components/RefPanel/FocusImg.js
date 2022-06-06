import React from 'react'

const FocusImg = ({imgUrl, onClose}) => {
  return (
    <div className='FocusFrame'>
        <div>
            <img src={imgUrl} alt="Focused image" className='FocusImg' onClick={onClose}/>
        </div>
    </div>
  )
}

export default FocusImg