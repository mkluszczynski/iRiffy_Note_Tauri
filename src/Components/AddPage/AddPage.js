import React, { useEffect, useState } from 'react'
import AddInput from './InputComponents/AddInput'
import AddOrderButton from './InputComponents/AddOrderButton.js'
import WorkFeild from './WorkFeild.js'

import "../../Styles/AddPage.css"
import Plus from "../../Svg/Plus.svg"
import AddWorkButton from './InputComponents/AddWorkButton'
import RefPanel from '../RefPanel/RefPanel'
import { appDir, join } from '@tauri-apps/api/path'
import { readTextFile } from '@tauri-apps/api/fs'

const AddPage = () => {

  const [orderData, setOrderData] = useState([]);
  const [worksData, setWorksData] = useState([]);
  const [noOfWorks, setNoOfWorks] = useState(0);
  const [isRefPanelOpen, setIsRefPanelOpen] = useState(false);
  //const orderId = orderData.length;


  useEffect(() => {
    SetUpData();
  }, orderData);

  //Changes state of refpanel if refbutton has been clicked or refpanel should close
  function OpenRefPanel() {
    setIsRefPanelOpen(!isRefPanelOpen);
  }

  //Get path to json data file
  async function GetPath() {
    const path = await join(await appDir(), "data.json")
    return path;
  }

  //Seting up data from file to the state
  async function SetUpData() {
    await readTextFile(await GetPath())
      .then(res => {
        setOrderData(JSON.parse(res))
      });
  }

  function AddNewWork(){
    let workId = worksData.length;
    let workName = "";
    let workType = "";
    let workNotes = "";
    let workIsDone = false;

    let newWorkObj = {
      "workId": workId,
      "workName": workName,
      "workType": workType,
      "workNotes": workNotes,
      "workIsDone": workIsDone,
      "refImgs": []
    }

    worksData.push(newWorkObj);
    setNoOfWorks(noOfWorks + 1);
    console.log(worksData);
  }

  function SaveWorks(){
    for( let i = 0 ; i < worksData.length; i++){
      let workName = document.getElementById("workName" + i).value;
      let workType = document.getElementById("workType" + i).value;
      let workNotes = document.getElementById("workNotes" + i).value;
      let workIsDone = document.getElementById("workIsDone" + i).value;

      worksData[i].workName = workName;
      worksData[i].workType = workType;
      worksData[i].workNotes = workNotes;
      worksData[i].workIsDone = workIsDone;
    }
    console.log(worksData);
  }

  function DelateWork(workId){
    worksData.splice(workId, 1)

    for(let i = 0 ; i < worksData.length ; i++){
      worksData[i].workId = i;
    }

    setNoOfWorks(noOfWorks - 1);
    console.log(worksData);
  }

  async function SaveData(){
    let jsonData = orderData;
    
    let orderName = document.getElementById("orderName").value;
    let orderType = document.getElementById("orderType").value;
    let orderDate = document.getElementById("orderDate").value;
    let orderDeadline = document.getElementById("orderDeadline").value;
    let orderStatus = document.getElementById("orderStatus").value;
    let orderCost = document.getElementById("orderCost").value;

    SaveWorks();
    let works = worksData;
  }

  return (
    <div className='AddPageMain'>
      {isRefPanelOpen && <RefPanel onClose={OpenRefPanel} />}
      <div className='AddPageForm'>
        <div>
          <AddInput placeholder="Imię" id="orderName" name="orderName" className="AddInput" />
          <AddInput placeholder="Typ zamówienia" id="orderType" name="orderType" className="AddInput" />
          <AddInput placeholder="Data zamówienia" id="orderDate" name="orderDate" className="AddInput" />
          <AddInput placeholder="Deadline" id="orderDeadline" name="orderDeadline" className="AddInput" />
          <AddInput placeholder="Status zamówienia" id="orderStatus" name="orderStatus" className="AddInput" />
          <AddInput placeholder="Koszt zamówienia" id="orderCost" name="orderCost" className="AddInput" />
          <br></br>
          <AddOrderButton buttonTitle="Dodaj zamówienie" className="AddOrderButton" onClick={SaveData}/>
        </div>
      </div>
      <div className='AddPageWorks'>
        {/* <WorkFeild onRefOpen={OpenRefPanel} workId={0} /> */}
        {worksData.map((item, index) => {
          return <WorkFeild onRefOpen={OpenRefPanel} workId={index} onDelete={DelateWork}/>
        })}
        <AddWorkButton src={Plus} alt="Plus" onClick={AddNewWork} className="AddWorkButton" classNameImg="AddWorkButtonImg" />
      </div>
    </div>
  )
}

export default AddPage