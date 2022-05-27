import React from 'react'
import DeleteWorkButton from '../AddPage/InputComponents/DeleteWorkButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"

const RefPanel = ({WorkName}) => {
  return (
    <div className='RefPanel'>
        <div className='RefPanelMain'>
            <DeleteWorkButton imgSrc={Cross} alt="Cross" className="ExitRefButton" classNameImg="ExitRefButtonImg"/>
            <h1>UWU Emotka</h1>
        </div>
    </div>
  )
}

export default RefPanel