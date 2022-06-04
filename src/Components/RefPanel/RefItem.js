import React from 'react'
import "../../Styles/RefPanel.css"
import CrossButton from '../AddPage/InputComponents/CrossButton';
import Cross from "../../Svg/DeleteArt.svg"

const RefItem = ({ refImgSrc, refImgId, deleteRefImg }) => {

    function Delete(){
        deleteRefImg(refImgId);
    }

    return (
        <div>
            <div className='RefImgItem' id={"refItem" + refImgId} >
                <CrossButton imgSrc={Cross} alt="Cross" className="DeleteRefButton" classNameImg="ExitRefButtonImg" onClick={Delete} />
                <div className='RefImgItemFrame'>
                    <img src={refImgSrc} alt={"refImage" + refImgId} className="RefImgItemImg" ></img>
                </div>
            </div>
        </div>
    )
}

export default RefItem