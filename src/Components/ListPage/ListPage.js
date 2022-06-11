import { readTextFile, writeFile } from '@tauri-apps/api/fs';
import { appDir, join } from '@tauri-apps/api/path';
import React, { useEffect, useState } from 'react'

import "../../Styles/ListPage.css"
import NoDataInfo from '../AddPage/NoDataInfo';
import EditPanel from './EditPanel/EditPanel';

import ListItem from './ListItem';

const ListPage = () => {

  const [orderData, setOrderData] = useState([]);
  const [orderEditId, setOrderEditId] = useState();
  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false);

  useEffect(() => {
    SetUpData();
    console.log("XDDDDDDDDD")
  }, [isEditPanelOpen]);

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

  function OpenEditPanel(orderId){
    console.log(orderId);
    console.log(orderData);
    setOrderEditId(orderId);
    setIsEditPanelOpen(true);
  }

  function CloseEditPanel(){
    console.log("Close Editpanel");
    setIsEditPanelOpen(false);
  }

  async function SaveOrder(){
    await writeFile({
      "path": await GetPath(),
      "contents": JSON.stringify(orderData)
    });
    console.log(orderData);
  }

  function DeleteOrder(orderId){

    orderData.splice(orderId, 1);

    //Refresh ids
    for(let i = 0 ; i < orderData.length ; i++){
      orderData[i].orderId = i;
    }

    SaveOrder();
  }

  const OrdersList = orderData.map((item, index) => {
    return <ListItem orderData={item} onEditClick={() => OpenEditPanel(item.orderId)} isEdit={isEditPanelOpen}/>
  });


  return (
    <div className="ListPage" onLoad={SetUpData} >
      {OrdersList}
      {orderData.length === 0 && <NoDataInfo infoToShow="Brak informacji"/>}
      {isEditPanelOpen && <EditPanel orderData={orderData[orderEditId]} onClose={CloseEditPanel} onOrderSave={SaveOrder} onOrderDelete={DeleteOrder}/>}
    </div>
  )
}

export default ListPage