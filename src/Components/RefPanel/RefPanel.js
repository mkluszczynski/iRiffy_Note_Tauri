import React, { useEffect, useState } from 'react'
import CrossButton from '../AddPage/InputComponents/CrossButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"
import { render } from '@testing-library/react'




const RefPanel = ({workId, workName, onClose, workRefImgs}) => {

  const [refData, setRefData] = useState([])

  function x() {

    for(let i = 0 ; i < workRefImgs.length ; i++){
      refData.push(workRefImgs[i].refUrl);
      console.log("heheahha", refData);
    }
    console.log("hihihahah", workRefImgs)
    console.log("refDataLoad", refData)
    console.log("XXXX")
    document.getElementById("fileInput" + workId).addEventListener("change", function(){
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        console.log(reader.result);
        refData.push(reader.result);
        console.log("refData", refData);
        console.log("workRefImgs", workRefImgs);
        //setRefData(refData);
      });

      reader.readAsDataURL(this.files[0]);

    });
    console.log("YYYY");
  }

  function CloseRefPanel(){
    onClose();
    console.log("daj mi siłę", workRefImgs)
    workRefImgs.forEach(() => {
      workRefImgs.pop();
    });
    console.log("type", typeof(workRefImgs));
    //console.log("WorkImgsClear",workRefImgs);
    for(let i = 0 ; i < refData.length; i++){
      let refObj = {
        "refId": i,
        "refUrl": refData[i]
      }

      workRefImgs.push(refObj);
      console.log("WorkImgsPush",workRefImgs)
    }

    console.log("new REf",workRefImgs);
  }

  return (
    <div className='RefPanel' onLoad={x}>
      <div className='RefPanelMain'>
        <CrossButton imgSrc={Cross} alt="Cross" className="ExitRefButton" classNameImg="ExitRefButtonImg" onClick={CloseRefPanel} />
        <h1>{workName}</h1>
        <input type="file" id={"fileInput" + workId} />

        <input type="button" value="Test" />
        <span id="testSpan">Tutaj</span>
      </div>
    </div>
  )
}

export default RefPanel