import React, { useEffect, useState } from 'react'
import AddInput from './InputComponents/AddInput'
import AddOrderButton from './InputComponents/AddOrderButton.js'
import WorkFeild from './WorkFeild.js'

import "../../Styles/AddPage.css"
import Plus from "../../Svg/Plus.svg"
import AddWorkButton from './InputComponents/AddWorkButton'
import RefPanel from '../RefPanel/RefPanel'
import { appDir, join } from '@tauri-apps/api/path'
import { readTextFile, writeFile } from '@tauri-apps/api/fs'
import { wait } from '@testing-library/user-event/dist/utils'
import NoDataInfo from './NoDataInfo'

const AddPage = () => {

  const [orderData, setOrderData] = useState([]);
  const [worksData, setWorksData] = useState([]);
  const [noOfWorks, setNoOfWorks] = useState(0);
  const [idOfWork, setIdOfWork] = useState(0);
  const [isRefPanelOpen, setIsRefPanelOpen] = useState(false);

  function OpenRefPanel() {
    setIsRefPanelOpen(true);
    SaveWorks();
  }

  function CloseRefPanel(){
    setIsRefPanelOpen(false);
    console.log(worksData);
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
    SaveWorks();
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
      "workRefImgs": []
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
      let workIsDone = document.getElementById("workIsDone" + i).checked;

      worksData[i].workName = workName;
      worksData[i].workType = workType;
      worksData[i].workNotes = workNotes;
      worksData[i].workIsDone = workIsDone;
    }
  }

  function DelateWork(workId){
    SaveWorks();
    worksData.splice(workId, 1)

    for(let i = 0 ; i < worksData.length ; i++){
      worksData[i].workId = i;
      document.getElementById("workName" + i).value = worksData[i].workName;
      document.getElementById("workType" + i).value = worksData[i].workType;
      document.getElementById("workNotes" + i).value = worksData[i].workNotes;
      document.getElementById("workIsDone" + i).checked = worksData[i].workIsDone;

      if(document.getElementById("workIsDone" + i).checked){
        document.getElementById("workForm" + i).style.borderColor = "#6BD425";
      }
      else{
        document.getElementById("workForm" + i).style.borderColor = "#AF125A";
      }

    }

    setNoOfWorks(noOfWorks - 1);
    console.log(worksData);
  }

  async function SaveData(){

    let orderId = orderData.length;
    let orderName = document.getElementById("orderName").value;
    let orderType = document.getElementById("orderType").value;
    let orderDate = document.getElementById("orderDate").value;
    let orderDeadline = document.getElementById("orderDeadline").value;
    let orderStatus = document.getElementById("orderStatus").value;
    let orderCost = document.getElementById("orderCost").value;

    SaveWorks();
    let works = worksData;

    let orderObj = {
      "orderId": orderId,
      "orderName": orderName,
      "orderType": orderType,
      "orderDate": orderDate,
      "orderDeadline": orderDeadline,
      "orderStatus": orderStatus,
      "orderCost": orderCost,
      "works": works
    }

    orderData.push(orderObj);

    await writeFile({
      "path": await GetPath(),
      "contents": JSON.stringify(orderData)
    });

    console.log(orderData);
    window.location.reload();
  }

  const Works = worksData.map((item, index) => {
    return <WorkFeild onRefOpen={OpenRefPanel} setWorkId={setIdOfWork} workId={index} onDelete={DelateWork}/>
  });

  return (
    <div className='AddPageMain' onLoad={SetUpData}>
      <div className='AddPageForm'>
        <div>
          <AddInput placeholder="Imię" id="orderName" name="orderName" className="AddInput" />
          <AddInput placeholder="Typ zamówienia" id="orderType" name="orderType" className="AddInput" />
          <AddInput placeholder="Data zamówienia" id="orderDate" name="orderDate" className="AddInput" pattern="\d{2}.\d{2}.\d{4}"/>
          <AddInput placeholder="Deadline" id="orderDeadline" name="orderDeadline" className="AddInput" pattern="\d{2}.\d{2}.\d{4}"/> 
          <AddInput placeholder="Status zamówienia" id="orderStatus" name="orderStatus" className="AddInput" />
          <AddInput placeholder="Koszt zamówienia" id="orderCost" name="orderCost" className="AddInput" />
          <br></br>
          <AddOrderButton buttonTitle="Dodaj zamówienie" className="AddOrderButton" onClick={SaveData}/>
        </div>
      </div>
      <div className='AddPageWorks'>
        {worksData.length === 0 && <NoDataInfo infoToShow="Brak prac..." className="NoDataInfo"/>}
        {Works}
        <AddWorkButton src={Plus} alt="Plus" onClick={AddNewWork} className="AddWorkButton" classNameImg="AddWorkButtonImg" />
      </div>
      {isRefPanelOpen && <RefPanel onClose={CloseRefPanel} workId={idOfWork} workData={worksData[idOfWork]}/>}
    </div>
  )
}

export default AddPage