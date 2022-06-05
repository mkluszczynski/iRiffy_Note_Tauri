import React, { useEffect, useState } from 'react'
import CrossButton from '../AddPage/InputComponents/CrossButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"
import RefItem from './RefItem'



const RefPanel = ({ workId, workData, onClose }) => {

  const [x, setX] = useState(0);

  function LoadPanel() {
    console.log("Load")
  }

  function Reload (){
    setX(value => value + 1)
    console.log("Reload", x);
  }

  function AddRefImg(refUrl){
    let refObj = {
      "refId": workData.workRefImgs.length,
      "refUrl": refUrl
    }
    workData.workRefImgs.push(refObj);
    console.log(workData);
    Reload();
  }

  function DeleteRefImg(refId){
    workData.workRefImgs.splice(refId, 1);
    console.log(workData);
  }

  const RefImgsComponent = workData.workRefImgs.map((item, index) => {
    // return <RefItem refImgSrc={item.refUrl} refImgId={item.refId} onDelete={DeleteRefImg}/>
    return <h1>{item.refUrl}</h1>
  });

  return (
    <div className='RefPanel' onLoad={LoadPanel}>
      <div className='RefPanelMain'>
        <CrossButton imgSrc={Cross} alt="Cross" className="ExitRefButton" classNameImg="ExitRefButtonImg" onClick={onClose} />
        <h1>{workData.workName + " " + workId}</h1>
        <input type="file" id={"fileInput" + workId} />
        <input type="button" value="Add" onClick={AddRefImg} />
        <div className='RefPanelImgContener'>
        {RefImgsComponent}
        </div>
      </div>
    </div>
  )
}

export default RefPanel