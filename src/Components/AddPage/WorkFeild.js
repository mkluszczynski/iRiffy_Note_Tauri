import React from 'react'
import Cross from '../../Svg/DeleteArt.svg'
import '../../Styles/AddPage.css'
import AddInput from './InputComponents/AddInput'
import AddCheckbox from './InputComponents/AddCheckbox'
import DeleteWorkButton from './InputComponents/DeleteWorkButton'
import AddTextArea from './InputComponents/AddTextArea'
import AddRefButton from './InputComponents/AddRefButton'

const WorkFeild = ({ onRefOpen, workId, onDelete }) => {

  function DeleteWork() {
    onDelete(workId);
  }

  return (
    <div className='WorkForm'>
      <DeleteWorkButton onClick={DeleteWork} imgSrc={Cross} alt="DeleteWork" className="DeleteWorkButton" classNameImg="DeleteWorkImg" />

      <AddInput placeholder="Nazwa pracy" id={"workName" + workId} name="workName" className="WorkInput" />
      <AddInput placeholder="Typ pracy" id={"workType" + workId} name="workType" className="WorkInput" />
      <AddTextArea placeholder="Notatki" id={"workNotes" + workId} name="workNotes" className="WorkTextArea" rows="7" />
      <AddRefButton title="Refki" onClick={onRefOpen} className="WorkRefButton" />
      <AddCheckbox classNameComponent="WorkIsDoneWrapper" classNameDiv="WorkIsDoneDiv" classNameLabel="WorkIsDoneLabel" classNameInput="WorkIsDoneInput" id={"workIsDone" + workId} name="workIsDone" title="Skończone" />
    </div>
  )
}

export default WorkFeild