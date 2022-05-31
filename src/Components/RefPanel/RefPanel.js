import React from 'react'
import DeleteWorkButton from '../AddPage/InputComponents/DeleteWorkButton'

import "../../Styles/RefPanel.css"
import Cross from "../../Svg/DeleteArt.svg"


import { writeFile, readTextFile, Dir } from '@tauri-apps/api/fs'
import { convertFileSrc } from '@tauri-apps/api/tauri'
import { appDir, join } from '@tauri-apps/api/path'

const RefPanel = ({WorkName}) => {

    // function hehexd(){
    //     const fileInput = document.getElementById("fileInput");
    //     fileInput.addEventListener("change", function(){
    //         const reader = new FileReader();
            
    //         reader.readAsDataURL(this.files[0]);
            
    //         reader.addEventListener("load", function(){
    //             console.log(reader.result);
    //         });

    //     });
    // }

    function FsTauriTest(){
        let filePath = appDir();
        console.log(filePath)
        let f = readTextFile(filePath);
        console.log(f);
    }

  return (
    <div className='RefPanel'>
        <div className='RefPanelMain'>
            <DeleteWorkButton imgSrc={Cross} alt="Cross" className="ExitRefButton" classNameImg="ExitRefButtonImg"/>
            <h1>UWU Emotka</h1>
            <input type="file" id="fileInput"/>

            <input type="button" value="Test" onClick={FsTauriTest} />
            <span id="testSpan">Tutaj</span>
        </div>
    </div>
  )
}

export default RefPanel