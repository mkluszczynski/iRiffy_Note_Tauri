import React, { useState } from 'react'
import CrossButton from '../AddPage/InputComponents/CrossButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"
import { render } from '@testing-library/react'




const RefPanel = ({workId, workName, onClose, workRefImgs}) => {

  const [refData, setRefData] = useState([]);



  function x() {
    console.log("XXXX")
    document.getElementById("fileInput" + workId).addEventListener("change", function(){
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        console.log(reader.result);
        refData.push(reader.result);
        console.log(refData);
        setRefData(refData);
      });

      reader.readAsDataURL(this.files[0]);

    });
    console.log(workRefImgs);
    console.log("YYYY");
  }

  function y(){
    console.log("nie wiem ", refData)
    for(let i = 0 ; i < refData.length; i++){
      let refId = i;
      let refUrl = refData[i];

      let refObj = {
        "refId": refId,
        "refUrl": refUrl
      };

      console.log("push",workRefImgs.push(refObj));
      console.log(workRefImgs);
    }
    console.log(workRefImgs);
  }

  return (
    <div className='RefPanel' onLoad={x}>
      <div className='RefPanelMain'>
        <CrossButton imgSrc={Cross} alt="Cross" className="ExitRefButton" classNameImg="ExitRefButtonImg" onClick={onClose} />
        <h1>{workName}</h1>
        <input type="file" id={"fileInput" + workId} />

        <input type="button" value="Test" onClick={y}/>
        <span id="testSpan">Tutaj</span>
      </div>
    </div>
  )
}

export default RefPanel