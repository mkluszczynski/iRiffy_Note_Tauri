import React, { useEffect, useState } from 'react'
import CrossButton from '../AddPage/InputComponents/CrossButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"
import RefItem from './RefItem'



const RefPanel = ({ workId, workName, onClose, onOpen, workRefImgs }) => {
  
  const [refData, setRefData] = useState([]);
  const [hehe, setHehe] = useState(0);

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

  function RemoveInputListener(){
    const input = document.getElementById("fileInput" + workId);
    input.removeEventListener("change", LoadFileReader);
  }

  function LoadFileReader() {
    const reader = new FileReader();

    reader.onload = function () {
      refData.push(reader.result);
      console.log("Added",reader.result);
      console.log("Add RefData", refData)
    }

    reader.onloadend = function () {
      RemoveInputListener();
      SaveRefData();
      LoadRefData();
      Button();

      console.log("Save RefData", refData)
      console.log("Save workRefData", workRefImgs)
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

    const y = refData.length;
    for (let i = 0; i < y; i++) {
      refData.pop();
    }
  }

  let test = workRefImgs.map((item, index) => {
    return <RefItem refImgSrc={item.refUrl} refImgId={index} />
  });

  function Button(){
    setHehe(hehe => hehe + 1);
  }

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