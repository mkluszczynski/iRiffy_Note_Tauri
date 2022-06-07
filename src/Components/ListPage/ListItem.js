import React, { useEffect, useState } from 'react'

import "../../Styles/ListPage.css"
import List from "../../Svg/ListTasks.svg"
import ListDataLabel from './ListDataLabel';

const ListItem = ({ orderData, onEditClick }) => {

    const [noOfWorksToDo, setNoOfWorksToDo] = useState(0);
    const [noOfWorksDone, setNoOfWorksDone] = useState(0);

    useEffect(() => {
        SetWorksToDo();
    }, []);

    function SetWorksToDo(){
        setNoOfWorksToDo(0);
        setNoOfWorksDone(0);
        for(let i = 0 ; i < orderData.works.length; i++) {
            if(orderData.works[i].workIsDone === false){
                setNoOfWorksToDo(value => value + 1);
            }
            else if(orderData.works[i].workIsDone === true){
                setNoOfWorksDone(value => value + 1);
            }
        }
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

            <div className='ListButton' onClick={onEditClick}>
                <img src={List} alt="help" className='ListButtonImg`'/>
            </div>
        </div>
    )
}

export default ListItem