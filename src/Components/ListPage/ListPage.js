import { readTextFile } from '@tauri-apps/api/fs';
import { appDir, join } from '@tauri-apps/api/path';
import React, { useEffect, useState } from 'react'

import "../../Styles/ListPage.css"
import NoDataInfo from '../AddPage/NoDataInfo';

import ListItem from './ListItem';

const ListPage = () => {

  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    SetUpData();
  }, []);

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
    console.log("Hihi")
  }

  const OrdersList = orderData.map((item, index) => {
    return <ListItem orderData={item} />
  });


  return (
    <div className="ListPage" onLoad={SetUpData} >
      {OrdersList}
      {orderData.length === 0 && <NoDataInfo infoToShow="Brak informacji"/>}
      
    </div>
  )
}

export default ListPage