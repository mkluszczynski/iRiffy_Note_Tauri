import React from 'react'
import Cross from '../../Svg/DeleteArt.svg'
import '../../Styles/AddPage.css'
import AddInput from './AddInput'

const WorkFeild = () => {
  return (
    <div className='WorkForm'>
        <div onClick={""}>
            <img src={Cross} alt="DeleteWork" className='DeleteWorkButton'/>
        </div>
            
        <AddInput placeholder="Nazwa pracy" id="workName" name="workName" className="WorkInput"/>
        <AddInput placeholder="Typ pracy" id="workType" name="workType" className="WorkInput"/>
        <AddInput placeholder="Notatnki" id="workNotes" name="workNotes" className="WorkInput"/> {/*Type to change */}
        <AddInput placeholder="Refki" id="workNotes" name="workNotes" className="WorkInput"/> {/*Type to change */}
        <div className='WorkIsDoneDiv'>
            <label for="workIsDone" className='WorkIsDoneLabel'>
                Skończone 
                <input type="checkbox" defaultChecked id='workIsDone' name='workIsDone' className='WorkIsDoneInput'/>
            </label>
                
        </div>
    </div>
  )
}

export default WorkFeild