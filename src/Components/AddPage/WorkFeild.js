import React from 'react'
import Cross from '../../Svg/DeleteArt.svg'
import '../../Styles/AddPage.css'
import AddInput from './InputComponents/AddInput'
import AddCheckbox from './InputComponents/AddCheckbox'
import DeleteWorkButton from './InputComponents/DeleteWorkButton'
import AddTextArea from './InputComponents/AddTextArea'
import AddRefButton from './InputComponents/AddRefButton'

const WorkFeild = () => {
  return (
    <div className='WorkForm'>
        <DeleteWorkButton onClick={""} imgSrc={Cross} alt="DeleteWork" className="DeleteWorkButton" classNameImg="DeleteWorkImg"/>
            
        <AddInput placeholder="Nazwa pracy" id="workName" name="workName" className="WorkInput"/>
        <AddInput placeholder="Typ pracy" id="workType" name="workType" className="WorkInput"/>
        <AddTextArea placeholder="Notatki" id="workNotes" name="workNotes" className="WorkTextArea" rows="7"/>
        <AddRefButton title="Refki" onClick={""} className="WorkRefButton"/>
        <AddCheckbox classNameComponent="WorkIsDoneWrapper" classNameDiv="WorkIsDoneDiv" classNameLabel="WorkIsDoneLabel" classNameInput="WorkIsDoneInput" id="workIsDone" name="workIsDone" title="Skończone"/>
    </div>
  )
}

export default WorkFeild