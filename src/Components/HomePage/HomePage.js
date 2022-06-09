import { readTextFile } from '@tauri-apps/api/fs'
import { appDir, join } from '@tauri-apps/api/path'
import React, { useEffect, useState } from 'react'
import "../../Styles/HomePage.css"
import Logo from "../../Svg/iRiffyNoteLogo.svg"
import Line from "../../Svg/Line.svg"

const HomePage = () => {

  const [orderData, setOrderData] = useState([]);
  const [noOfOrders, setNoOfOrders] = useState(0);
  const [noOfWorksToDo, setNoOfWorksToDo] = useState(0);
  const [noOfWorksDone, setNoOfWorksDone] = useState(0);
  const [noOfOrdersDone, setNoOfOrdersDone] = useState(0);
  const [noOfIncome, setNoOfIncome] = useState(0);

  const [reload, setReload] = useState(0);

  useEffect(() => {
    SetUpData();
    NumberOfOrders();
    NumberOfWorksToDo();
    NumberOfOrdersDone();
    NumberOfIncome();
  }, [reload]);

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
      setReload(1);
  }

  function NumberOfOrders(){
    console.log("Number of orders", orderData)
    setNoOfOrders(orderData.length);
  }

  function NumberOfWorksToDo(){
    let worksDone = 0;
    let worksToDo = 0;

    //Loop to go through all orders
    for(let i = 0 ; i < orderData.length ; i++ ){
      //Loop to go through all works
      for(let j = 0 ; j < orderData[i].works.length; j++){
        //Check if work is done
        if(orderData[i].works[j].workIsDone === false){
          worksToDo = worksToDo + 1;
        }
        else if(orderData[i].works[j].workIsDone === true){
          worksDone = worksDone + 1;
        }
      }
    }

    setNoOfWorksDone(worksDone);
    setNoOfWorksToDo(worksToDo);
  }

  function NumberOfOrdersDone(){

    let ordersDone = 0;

    //Loop to go through all orders
    for(let i = 0 ; i < orderData.length ; i++){

      let worksDone = 0;

      //Loop to go through all works 
      for(let j = 0 ; j < orderData[i].works.length; j++){
        
        //If work is done
        if(orderData[i].works[j].workIsDone === true){
          
          //Add work to counter
          worksDone += 1;

          //If counter is equal to number of works
          if(worksDone === orderData[i].works.length){

            //Add order to counter
            ordersDone = ordersDone + 1;
          }
        }
      }
    }

    setNoOfOrdersDone(ordersDone);
  }

  function NumberOfIncome(){

    let totalIncome = 0;

    //Loop to go through all orders
    for(let i = 0 ; i < orderData.length; i++){
      //If there is no data about cost continue
      if(orderData[i].orderCost === ""){
        continue;
      }

      //Add income to counter
      totalIncome = totalIncome + parseInt(orderData[i].orderCost);
    }

    setNoOfIncome(totalIncome);
  }

  return (
    <div className='HomePageMain'>
        <img src={Logo} alt="Logo" className='HomePageLogo'/>
        <h1 className='HomePageTitle'>Notatnik iRiffy</h1>

        <h3 className='HomePageInfo'>Ilość zleceń: {noOfOrders}</h3>
        <h3 className='HomePageInfo'>Ilość prac do zrobienia: {noOfWorksToDo}</h3>
        <h3 className='HomePageInfo'>Ilość wykonanych prac: {noOfWorksDone}</h3>

        <img src={Line} alt="Line" className='HomePageLine'/>

        <h3 className='HomePageInfo'>Ilość wykonanych zleceń: {noOfOrdersDone}</h3>
        <h3 className='HomePageInfo'>Całkowity przychód: {noOfIncome}</h3>
    </div>
  )
}

export default HomePage