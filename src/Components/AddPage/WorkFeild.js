import React, { useEffect } from 'react'
import Cross from '../../Svg/DeleteArt.svg'
import '../../Styles/AddPage.css'
import AddInput from './InputComponents/AddInput'
import AddCheckbox from './InputComponents/AddCheckbox'
import AddTextArea from './InputComponents/AddTextArea'
import AddRefButton from './InputComponents/AddRefButton'
import CrossButton from './InputComponents/CrossButton'
import RefPanel from '../RefPanel/RefPanel'

const WorkFeild = ({ onRefOpen, setWorkId, workId, onDelete, shouldRefPanelRender, onRefClose, workData}) => {

  function DeleteWork() {
    onDelete(workId);
  }

  function OpenRef(){
    onRefOpen();
    setWorkId(workId);
  }

  return (
    <div className='WorkForm' id={"workForm" + workId}>
      {shouldRefPanelRender && <RefPanel onClose={onRefClose} onOpen={OpenRef} workId={workId} workName={workData.workName} workRefImgs={workData.workRefImgs}/>}
      <CrossButton onClick={DeleteWork} imgSrc={Cross} alt="DeleteWork" className="DeleteWorkButton" classNameImg="DeleteWorkImg" />

      <AddInput placeholder="Nazwa pracy" id={"workName" + workId} name="workName" className="WorkInput" />
      <AddInput placeholder="Typ pracy" id={"workType" + workId} name="workType" className="WorkInput" />
      <AddTextArea placeholder="Notatki" id={"workNotes" + workId} name="workNotes" className="WorkTextArea" rows="7" />
      <AddRefButton title="Refki" onClick={OpenRef} className="WorkRefButton" />
      <AddCheckbox classNameComponent={"WorkIsDoneWrapper"} classNameDiv="WorkIsDoneDiv" classNameLabel="WorkIsDoneLabel" classNameInput="WorkIsDoneInput" workId={workId} id={"workIsDone" + workId} name="workIsDone" title="Skończone" />
    </div>
  )
}

export default WorkFeild