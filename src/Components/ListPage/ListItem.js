import React, { useEffect, useState } from 'react'

import "../../Styles/ListPage.css"
import List from "../../Svg/ListTasks.svg"
import ListDataLabel from './ListDataLabel';

const ListItem = ({ orderData }) => {

    const [noOfWorksToDo, setNoOfWorksToDo] = useState(0);
    const [noOfWorksDone, setNoOfWorksDone] = useState(0);

    useEffect(() => {
        SetWorksDone();
    }, []);

    function SetWorksToDo(){
        orderData.works.map((item) => {
            if(item.workIsDone === false){
                setNoOfWorksToDo(value => value + 1);
            }
        })
    }

    function SetWorksDone(){
        orderData.works.map((item) => {
            if(item.workIsDone === true){
                setNoOfWorksDone(noOfWorksDone + 1);
            }
            else if(item.workIsDone === false)
            {
                setNoOfWorksToDo(noOfWorksToDo + 1);
            }
        })
    }

    return (
        <div className='ListItem'>
            <div className='ListLabelContener'>
                <ListDataLabel dataToShow={"Imię: " + orderData.orderName} className="ListDataLabel"/>
                <ListDataLabel dataToShow={"Typ zamówienia: " + orderData.orderType} className="ListDataLabel"/>
                <ListDataLabel dataToShow={"Data zamówienia: " + orderData.ordreDate} className="ListDataLabel"/>
                <ListDataLabel dataToShow={"Deadline zamówienia: " + orderData.orderDeadline} className="ListDataLabel"/>
                <ListDataLabel dataToShow={"Status zamówienia: "+ orderData.orderStatus} className="ListDataLabel"/>
                <ListDataLabel dataToShow={"Koszt zamówienia: " + orderData.orderCost} className="ListDataLabel"/>
                <ListDataLabel dataToShow={"✅:" + noOfWorksDone} className="ListDataLabel"/>
                <ListDataLabel dataToShow={"❌:" + noOfWorksToDo} className="ListDataLabel"/>
            </div>

            <img src={List} alt="help" className='ListButton'/>
        </div>
    )
}

export default ListItem