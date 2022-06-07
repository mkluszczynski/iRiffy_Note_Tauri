import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import AddInput from '../../AddPage/InputComponents/AddInput'
import AddOrderButton from '../../AddPage/InputComponents/AddOrderButton'
import AddWorkButton from '../../AddPage/InputComponents/AddWorkButton'
import WorkFeild from '../../AddPage/WorkFeild'
import WorkItem from './WorkItem'

import Plus from "../../../Svg/Plus.svg"

const EditPanel = (orderData) => {



    useEffect(() => {
        console.log(orderData["orderData"].orderName);
        LoadOrderData();
    },[]);

    function LoadOrderData(){
        document.getElementById("orderName").value = orderData["orderData"].orderName;
        document.getElementById("orderType").value = orderData["orderData"].orderType;
        document.getElementById("orderDate").value = orderData["orderData"].orderDate;
        document.getElementById("orderDeadline").value = orderData["orderData"].orderDeadline;
        document.getElementById("orderStatus").value = orderData["orderData"].orderStatus;
        document.getElementById("orderCost").value = orderData["orderData"].orderCost;
    }

    const Works = orderData["orderData"].works.map((item)=>{
        return <WorkItem workId={item.workId} workData={item}/>
    });

    return (
        
        <div className='EditPanel'>
            <div className='WorksForm'>
                {/* <WorkFeild /> */}
                {Works}
                <AddWorkButton src={Plus} alt="Plus" onClick={""} className="WorkButton" classNameImg="AddWorkButtonImg"/>
            </div>
            <div className='OrderForm'>
                <div>
                    <AddInput placeholder="Imię" id="orderName" name="orderName" className="AddInput"/>
                    <AddInput placeholder="Typ zamówienia" id="orderType" name="orderType" className="AddInput" />
                    <AddInput placeholder="Data zamówienia" id="orderDate" name="orderDate" className="AddInput" pattern="\d{2}.\d{2}.\d{4}" />
                    <AddInput placeholder="Deadline" id="orderDeadline" name="orderDeadline" className="AddInput" pattern="\d{2}.\d{2}.\d{4}" />
                    <AddInput placeholder="Status zamówienia" id="orderStatus" name="orderStatus" className="AddInput" />
                    <AddInput placeholder="Koszt zamówienia" id="orderCost" name="orderCost" className="AddInput" />
                    <br></br>
                    <AddOrderButton buttonTitle="Dodaj zamówienie" className="AddOrderButton"  />
                </div>
            </div>
        </div>
    )
}

export default EditPanel