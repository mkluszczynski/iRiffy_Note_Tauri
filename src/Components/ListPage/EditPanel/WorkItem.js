import React, { useEffect } from 'react'

import Cross from "../../../Svg/DeleteArt.svg"
import '../../../Styles/AddPage.css'
import '../../../Styles/ListPage.css'
import CrossButton from '../../AddPage/InputComponents/CrossButton'
import AddInput from '../../AddPage/InputComponents/AddInput'
import AddTextArea from '../../AddPage/InputComponents/AddTextArea'
import AddRefButton from '../../AddPage/InputComponents/AddRefButton'
import AddCheckbox from '../../AddPage/InputComponents/AddCheckbox'


const WorkItem = ({ workId, workData, onRefOpen, onDelete }) => {

    useEffect(() => {
        console.log("WorkData", workData)
        LoadWorkData();
    }, []);

    function DeleteWork() {
        onDelete();
    }

    function OpenRef() {
        onRefOpen();
    }

    function SetCheckBox() {
        if (document.getElementById("workIsDone" + workId).checked) {
            document.getElementById("workForm" + workId).style.borderColor = "#6BD425";
        } else {
            document.getElementById("workForm" + workId).style.borderColor = "#AF125A";
        }
        console.log("Changed border");
    }

    function LoadWorkData() {
        document.getElementById("workName" + workId).value = workData.workName;
        document.getElementById("workType" + workId).value = workData.workType;
        document.getElementById("workNotes" + workId).value = workData.workNotes;
        document.getElementById("workIsDone" + workId).checked = workData.workIsDone;
        SetCheckBox();
    }

    return (
        <div className='WorkItem' id={"workForm" + workId}>
            <CrossButton onClick={DeleteWork} imgSrc={Cross} alt="DeleteWork" className="DeleteWorkButton" classNameImg="DeleteWorkImg" />

            <AddInput placeholder="Nazwa pracy" id={"workName" + workId} name="workName" className="WorkInput" />
            <AddInput placeholder="Typ pracy" id={"workType" + workId} name="workType" className="WorkInput" />
            <AddTextArea placeholder="Notatki" id={"workNotes" + workId} name="workNotes" className="WorkTextArea" rows="7" />
            <AddRefButton title="Refki" onClick={OpenRef} className="WorkRefButton" />
            <AddCheckbox classNameComponent={"WorkIsDoneWrapper"} classNameDiv="WorkIsDoneDiv" classNameLabel="WorkIsDoneLabel" classNameInput="WorkIsDoneInput" workId={workId} id={"workIsDone" + workId} name="workIsDone" title="Skończone" />
        </div>
    )
}

export default WorkItem