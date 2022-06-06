import React, { useEffect, useState } from 'react'
import CrossButton from '../AddPage/InputComponents/CrossButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"
import RefItem from './RefItem'
import FocusImg from './FocusImg'
import NoDataInfo from '../AddPage/NoDataInfo'



const RefPanel = ({ workId, workData, onClose }) => {

  const [x, setX] = useState(0);
  const [imgToAdd, setImgToAdd] = useState("");
  const [imgToFocus, setImgToFocus] = useState();
  const [isFocused, setIsFocused] = useState(false);

  function LoadPanel() {
    AddInputListener();
  }

  function Reload() {
    setX(value => value + 1)
  }

  //Adds event listener to input and set imgToAdd after load 
  function AddInputListener() {
    const input = document.getElementById("fileInput" + workId);

    input.addEventListener("change", () => {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setImgToAdd(reader.result);
      });

      reader.readAsDataURL(input.files[0]);
    })
  }

  function AddRefImg(refUrl) {
    //If there is no url to add, stop this function
    if (refUrl === "") {
      return;
    }

    //Prepare object to add
    let refObj = {
      "refId": workData.workRefImgs.length,
      "refUrl": refUrl
    }

    workData.workRefImgs.push(refObj);
    Reload();
  }

  function DeleteRefImg(refId) {
    workData.workRefImgs.splice(refId, 1);

    //Refresh ids of refObjects 
    for (let i = 0; i < workData.workRefImgs.length; i++) {
      workData.workRefImgs[i].refId = i;
    }
    Reload();
  }

  function FocusImage(imgId) {
    setImgToFocus(imgId);
    setIsFocused(true);
  }

  function UnFocusImage() {
    setIsFocused(false);
  }

  const RefImgItems = workData.workRefImgs.map((item, index) => {
    return <RefItem refImgUrl={item.refUrl} refImgId={item.refId} onDelete={() => DeleteRefImg(item.refId)} onImgFocus={() => FocusImage(item.refId)} />
  });

  return (
    <div className='RefPanel' onLoad={LoadPanel}>
      {isFocused && <FocusImg imgUrl={workData.workRefImgs[imgToFocus].refUrl} onClose={UnFocusImage} />}
      <div className='RefPanelMain'>
        <CrossButton imgSrc={Cross} alt="Cross" className="ExitRefButton" classNameImg="ExitRefButtonImg" onClick={onClose} />
        <h1>{workData.workName}</h1>
        <div className='InputContener'>
          <input type="file" id={"fileInput" + workId} accept="image/* "/>
          <input type="button" value="Dodaj" className='AddRefButton' onClick={() => AddRefImg(imgToAdd)} />
        </div>
        <div className='RefPanelImgContener'>
          {workData.workRefImgs.length === 0 && <NoDataInfo infoToShow="Brak refek..." className="NoDataInfo" />}
          {RefImgItems}
        </div>
      </div>
    </div>
  )
}

export default RefPanel