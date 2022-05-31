import React from 'react'
import AddInput from './InputComponents/AddInput'
import AddOrderButton from './InputComponents/AddOrderButton.js'
import WorkFeild from './WorkFeild.js'

import "../../Styles/AddPage.css"
import Plus from "../../Svg/Plus.svg"
import AddWorkButton from './InputComponents/AddWorkButton'
import RefPanel from '../RefPanel/RefPanel'

const AddPage = () => {
  return (
    <div className='AddPageMain'>
      {/* <RefPanel /> */}
      <div className='AddPageForm'>
        <div>
          <AddInput placeholder="Imię" id="orderName" name="orderName" className="AddInput" />
          <AddInput placeholder="Typ zamówienia" id="orderType" name="orderType" className="AddInput" />
          <AddInput placeholder="Data zamówienia" id="orderDate" name="orderDate" className="AddInput" />
          <AddInput placeholder="Deadline" id="orderDeadline" name="orderDeadline" className="AddInput" />
          <AddInput placeholder="Status zamówienia" id="orderStatus" name="orderStatus" className="AddInput" />
          <AddInput placeholder="Koszt zamówienia" id="orderCost" name="orderCost" className="AddInput" />
          <br></br>
          <AddOrderButton buttonTitle="Dodaj zamówienie" className="AddOrderButton" />
        </div>
      </div>
      <div className='AddPageWorks'>
        <WorkFeild />

        <AddWorkButton src={Plus} alt="Plus" onClick={""} className="AddWorkButton" classNameImg="AddWorkButtonImg" />
      </div>
    </div>
  )
}

export default AddPage