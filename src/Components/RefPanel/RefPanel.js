import React from 'react'
import DeleteWorkButton from '../AddPage/InputComponents/DeleteWorkButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"


import { writeFile, readTextFile, Dir } from '@tauri-apps/api/fs'
import { convertFileSrc } from '@tauri-apps/api/tauri'
import { appDir, join } from '@tauri-apps/api/path'

const RefPanel = ({WorkName, onClose}) => {


  return (
    <div className='RefPanel'>
        <div className='RefPanelMain'>
            <DeleteWorkButton imgSrc={Cross} alt="Cross" className="ExitRefButton" classNameImg="ExitRefButtonImg" onClick={onClose}/>
            <h1>UWU Emotka</h1>
            <input type="file" id="fileInput"/>

            <input type="button" value="Test" onClick="#" />
            <span id="testSpan">Tutaj</span>
        </div>
    </div>
  )
}

export default RefPanel