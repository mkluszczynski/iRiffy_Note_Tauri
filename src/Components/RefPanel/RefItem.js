import React from 'react'
import "../../Styles/RefPanel.css"
import CrossButton from '../AddPage/InputComponents/CrossButton';
import Cross from "../../Svg/DeleteArt.svg"

const RefItem = ({ refImgSrc, refImgId, onDelete }) => {

    function Delete(){
        onDelete(refImgId);
    }

    return (
        <div>
            <div className='RefImgItem' id={"refItem" + refImgId} >
                <CrossButton imgSrc={Cross} alt="Cross" className="DeleteRefButton" classNameImg="ExitRefButtonImg" onClick={Delete} />
                <div className='RefImgItemFrame'>
                    <h1>{refImgSrc}</h1>
                    {/* <img src={refImgSrc} alt={"refImage" + refImgId} className="RefImgItemImg" ></img> */}
                </div>
            </div>
        </div>
    )
}

export default RefItem