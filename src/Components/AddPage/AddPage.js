import React from 'react'
import AddInput from './AddInput'
import AddOrderButton from './AddOrderButton.js'
import WorkFeild from './WorkFeild.js'

import "../../Styles/AddPage.css"

const AddPage = () => {
  return (
    <div className='AddPageMain'>
       <div className='AddPageForm'>
         <div>
          {/* 
            input name
            input type
            input orderDate
            input orderDeadline
            input orderStatus
            input orderCost

            addOrder button
          */}
          <AddInput placeholder="Imię" id="orderName" name="orderName" className="AddInput"/>
          <AddInput placeholder="Typ zamówienia" id="orderType" name="orderType" className="AddInput"/>
          <AddInput placeholder="Data zamówienia" id="orderDate" name="orderDate" className="AddInput"/>
          <AddInput placeholder="Deadline" id="orderDeadline" name="orderDeadline" className="AddInput"/>
          <AddInput placeholder="Status zamówienia" id="orderStatus" name="orderStatus" className="AddInput"/>
          <AddInput placeholder="Koszt zamówienia" id="orderCost" name="orderCost" className="AddInput"/>
          <br></br>
          <AddOrderButton buttonTitle="Dodaj zamówienie" className="AddOrderButton"/>

          </div>
       </div>
       <div className='AddPageWorks'>
        {/* 
          deleteButton
          workFeilds:
            workName(text)
            workType(text)
            workNotes(text)
            workRefPhotos(image)
            workIsDone(checkbox)
          addNewWorkButton

        */}
        <WorkFeild />
       </div>
    </div>
  )
}

export default AddPage