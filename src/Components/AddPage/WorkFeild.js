import React from 'react'
import Cross from '../../Svg/DeleteArt.svg'
import '../../Styles/AddPage.css'
import AddInput from './AddInput'
import AddCheckbox from './AddCheckbox'
import DeleteWorkButton from './DeleteWorkButton'
import AddTextArea from './AddTextArea'

const WorkFeild = () => {
  return (
    <div className='WorkForm'>
        <DeleteWorkButton onClick={""} imgSrc={Cross} alt="DeleteWork" className="DeleteWorkButton" classNameImg="DeleteWorkImg"/>
            
        <AddInput placeholder="Nazwa pracy" id="workName" name="workName" className="WorkInput"/>
        <AddInput placeholder="Typ pracy" id="workType" name="workType" className="WorkInput"/>
        <AddInput placeholder="Notatnki" id="workNotes" name="workNotes" className="WorkInput"/> {/*Type to change */}
        <AddTextArea placeholder="Notatki" id="workNotes" name="workNotes" className="WorkTextArea" rows="7"/>
        <AddInput placeholder="Refki" id="workNotes" name="workNotes" className="WorkInput"/> {/*Type to change */}
        <AddCheckbox classNameComponent="WorkIsDoneWrapper" classNameDiv="WorkIsDoneDiv" classNameLabel="WorkIsDoneLabel" classNameInput="WorkIsDoneInput" id="workIsDone" name="workIsDone" title="Skończone"/>
    </div>
  )
}

export default WorkFeild