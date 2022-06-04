import React, { useEffect, useState } from 'react'
import CrossButton from '../AddPage/InputComponents/CrossButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"
import RefItem from './RefItem'



const RefPanel = ({ workId, workName, onClose, onOpen, workRefImgs }) => {
  
  let refData = [];
  const [reloadCounter, setReloadCounter] = useState(0);

  function LoadPanel() {
    LoadRefData();
    FileHandler();
  }

  //Load old data to auxiliary array
  function LoadRefData() {

    let x = refData.length;
    for (let i = 0; i < x; i++) {
      refData.pop();
    }

    let y = workRefImgs.length;
    for (let i = 0; i < y; i++) {
      refData.push(workRefImgs[i].refUrl);
    }
  }

  //Removes event listener form file input
  function RemoveInputListener(){
    const input = document.getElementById("fileInput" + workId);
    input.removeEventListener("change", LoadFileReader);
  }

  //Creates FileReader to get file form file input
  function LoadFileReader() {
    const reader = new FileReader();

    //When reader gets file, its adding it ro refData array
    reader.onload = function () {
      refData.push(reader.result);
    }

    //When reader ends loading file, we save workRefData
    reader.onloadend = function () {
      RemoveInputListener();
      SaveRefData();
      LoadRefData();
      Reload();
    }

    reader.readAsDataURL(this.files[0]);

  }

  //Adds event to file input to get url of refImg
  function FileHandler() {
    const input = document.getElementById("fileInput" + workId);
    input.removeEventListener("change", LoadFileReader);
    input.addEventListener("change", LoadFileReader);
  }

  //Closes Panel and saves ref Imgs.
  function CloseRefPanel() {

    //Clear old array of refImgs
    const x = workRefImgs.length;
    for (let i = 0; i < x; i++) {
      workRefImgs.pop();
    }

    //Update array with new data from auxiliary array
    for (let i = 0; i < refData.length; i++) {
      let refObj = {
        "refId": i,
        "refUrl": refData[i]
      }
      workRefImgs.push(refObj);
    }
    onClose();
  }

  function SaveRefData(){
    //Clear old array of refImgs
    const x = workRefImgs.length;
    for (let i = 0; i < x; i++) {
      workRefImgs.pop();
    }

    //Update array with new data from auxiliary array
    for (let i = 0; i < refData.length; i++) {
      let refObj = {
        "refId": i,
        "refUrl": refData[i]
      }
      workRefImgs.push(refObj);
    }
  }

  
  function Reload(){
    setReloadCounter(value => value + 1);
    console.log("Reload", reloadCounter);
  }
  
  function DeleteRefImg(id){
    refData.splice(id, 1);
    SaveRefData();
    Reload();
  }

  let test = workRefImgs.map((item, index) => {
    return <RefItem refImgSrc={item.refUrl} refImgId={index} deleteRefImg={DeleteRefImg} />
  });

  return (
    <div className='RefPanel' onLoad={LoadPanel}>
      <div className='RefPanelMain'>
        <CrossButton imgSrc={Cross} alt="Cross" className="ExitRefButton" classNameImg="ExitRefButtonImg" onClick={CloseRefPanel} />
        <h1>{workName}</h1>
        <input type="file" id={"fileInput" + workId} />
        <div className='RefPanelImgContener'>
          {test}
        </div>
      </div>
    </div>
  )
}

export default RefPanel