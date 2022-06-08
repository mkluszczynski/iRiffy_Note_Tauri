import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import AddInput from '../../AddPage/InputComponents/AddInput'
import AddOrderButton from '../../AddPage/InputComponents/AddOrderButton'
import AddWorkButton from '../../AddPage/InputComponents/AddWorkButton'
import WorkFeild from '../../AddPage/WorkFeild'
import WorkItem from './WorkItem'

import Plus from "../../../Svg/Plus.svg"
import Cross from "../../../Svg/DeleteArt.svg"
import CrossButton from '../../AddPage/InputComponents/CrossButton'

import "../../../Styles/ListPage.css"
import RefPanel from '../../RefPanel/RefPanel'

const EditPanel = ({ orderData, onClose, onOrderSave, onOrderDelete }) => {

    const [worksCopy, setWorksCopy] = useState(orderData.works);
    const [noOfWorks, setNoOfWorks] = useState(orderData.works.length);
    const [workRefId, setWorkRefId] = useState(0);
    const [isRefOpen, setIsRefOpen] = useState(false);

    useEffect(() => {
        LoadOrderData();
        LoadWorkData();
    }, []);

    function LoadOrderData() {
        document.getElementById("orderName").value = orderData.orderName;
        document.getElementById("orderType").value = orderData.orderType;
        document.getElementById("orderDate").value = orderData.orderDate;
        document.getElementById("orderDeadline").value = orderData.orderDeadline;
        document.getElementById("orderStatus").value = orderData.orderStatus;
        document.getElementById("orderCost").value = orderData.orderCost;
    }

    async function SaveOrderData() {
        
        const orderName = document.getElementById("orderName").value;
        const orderType = document.getElementById("orderType").value;
        const orderDate = document.getElementById("orderDate").value;
        const orderDeadline = document.getElementById("orderDeadline").value;
        const orderStatus = document.getElementById("orderStatus").value;
        const orderCost = document.getElementById("orderCost").value;
        
        SaveWorks();
        const works = worksCopy;

        orderData.orderName = orderName;
        orderData.orderType = orderType;
        orderData.orderDate = orderDate;
        orderData.orderDeadline = orderDeadline;
        orderData.orderStatus = orderStatus;
        orderData.orderCost = orderCost;
        orderData.works = works;


        console.log(orderData);
        await onOrderSave();
        onClose();

    }

    function SaveWorks() {
        for (let i = 0; i < worksCopy.length; i++) {
            let workName = document.getElementById("workName" + i).value;
            let workType = document.getElementById("workType" + i).value;
            let workNotes = document.getElementById("workNotes" + i).value;
            let workIsDone = document.getElementById("workIsDone" + i).checked;

            worksCopy[i].workName = workName;
            worksCopy[i].workType = workType;
            worksCopy[i].workNotes = workNotes;
            worksCopy[i].workIsDone = workIsDone;
        }
        console.log("After Save", worksCopy);
    }

    function AddNewWork() {
        let workId = worksCopy.length;
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

        worksCopy.push(newWorkObj);
        setNoOfWorks(noOfWorks + 1)
        console.log("Ilosć works", noOfWorks);
        console.log("Add new Work", worksCopy);
    }

    function DeleteWork(workId) {
        SaveWorks();
        worksCopy.splice(workId, 1);

        for (let i = 0; i < worksCopy.length; i++) {
            worksCopy[i].workId = i;
            document.getElementById("workName" + i).value = worksCopy[i].workName;
            document.getElementById("workType" + i).value = worksCopy[i].workType;
            document.getElementById("workNotes" + i).value = worksCopy[i].workNotes;
            document.getElementById("workIsDone" + i).checked = worksCopy[i].workIsDone;

            if (document.getElementById("workIsDone" + i).checked) {
                document.getElementById("workForm" + i).style.borderColor = "#6BD425";
            }
            else {
                document.getElementById("workForm" + i).style.borderColor = "#AF125A";
            }

        }

        setNoOfWorks(noOfWorks - 1);
        console.log("noofworks", noOfWorks);

        console.log("Works after delete", worksCopy)
    }

    function LoadWorkData() {
        for (let i = 0; i < worksCopy.length; i++) {
            console.log(i);
            document.getElementById("workName" + i).value = worksCopy[i].workName;
            document.getElementById("workType" + i).value = worksCopy[i].workType;
            document.getElementById("workNotes" + i).value = worksCopy[i].workNotes;
            document.getElementById("workIsDone" + i).checked = worksCopy[i].workIsDone;

            if (document.getElementById("workIsDone" + i).checked) {
                document.getElementById("workForm" + i).style.borderColor = "#6BD425";
            } else {
                document.getElementById("workForm" + i).style.borderColor = "#AF125A";
            }
        }


    }

    function DeleteOrder(){
        onOrderDelete(orderData.orderId);
        onClose();
    }

    function OpenRefPanel(workId){
        setIsRefOpen(true);
        setWorkRefId(workId);
    }

    function CloseRefPanel(){
        setIsRefOpen(false);
    }

    const Works = worksCopy.map((item, index) => {
        return <WorkItem workId={item.workId} workData={item} onDelete={DeleteWork} onRefOpen={() => OpenRefPanel(item.workId)}/>
    });

    return (

        <div className='EditPanel'>
            {isRefOpen && <RefPanel workId={workRefId} workData={worksCopy[workRefId]} onClose={CloseRefPanel}/>}
            <div className='WorksForm'>
                {Works}
                <AddWorkButton src={Plus} alt="Plus" onClick={AddNewWork} className="WorkButton" classNameImg="AddWorkButtonImg" />
            </div>
            <div className='OrderForm'>
                <CrossButton imgSrc={Cross} className="CloseEditButton" classNameImg="CloseEditButtonImg" onClick={onClose} />
                <div>
                    <AddInput placeholder="Imię" id="orderName" name="orderName" className="AddInput" />
                    <AddInput placeholder="Typ zamówienia" id="orderType" name="orderType" className="AddInput" />
                    <AddInput placeholder="Data zamówienia" id="orderDate" name="orderDate" className="AddInput" pattern="\d{2}.\d{2}.\d{4}" />
                    <AddInput placeholder="Deadline" id="orderDeadline" name="orderDeadline" className="AddInput" pattern="\d{2}.\d{2}.\d{4}" />
                    <AddInput placeholder="Status zamówienia" id="orderStatus" name="orderStatus" className="AddInput" />
                    <AddInput placeholder="Koszt zamówienia" id="orderCost" name="orderCost" className="AddInput" />
                    <br></br>
                    <AddOrderButton buttonTitle="Zapisz zmiany" className="AddOrderButton" onClick={SaveOrderData} />
                    <AddOrderButton buttonTitle="Usuń zamówienie" className="DeleteOrderButton" onClick={DeleteOrder} />
                </div>
            </div>
        </div>
    )
}

export default EditPanel