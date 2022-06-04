import React from 'react'

const RefItem = ({ refImgSrc, refImgId, deleteImg }) => {

    return (
        <div >
            <div className='refImgItem' id={"refItem" + refImgId} >
                <h1>{"Item" + refImgId}</h1>
                <img src={refImgSrc} alt={"refImage" + refImgId} ></img>
            </div>
        </div>
    )
}

export default RefItem