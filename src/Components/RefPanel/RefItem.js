import React, { useState } from 'react'
import "../../Styles/RefPanel.css"
import CrossButton from '../AddPage/InputComponents/CrossButton';
import Cross from "../../Svg/DeleteArt.svg"
import FocusImg from './FocusImg';

const RefItem = ({ refImgUrl, refImgId, onDelete, onImgFocus }) => {

    const [imgUrl, setImgUrl] = useState(refImgUrl);

    function Delete() {
        onDelete(refImgId);
    }

    function Focus() {
        onImgFocus();
        console.log(refImgId);
    }

    return (
        <div>
            <div className='RefItem' id={"refItem" + refImgId} >
                <div className='RefItemFrame'>
                    <div style={{ width: "100%" }}>
                        <CrossButton imgSrc={Cross} alt="Cross" className="DeleteRefButton" classNameImg="ExitRefButtonImg" onClick={Delete} />
                    </div>
                    <div className='RefItemImgFrame'>
                        <img src={refImgUrl} alt={"refImage" + refImgId} className="RefItemImg" onClick={Focus}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RefItem