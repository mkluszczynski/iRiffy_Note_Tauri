import React from 'react'

const AddCheckbox = ({classNameComponent,classNameDiv, classNameLabel, classNameInput, title, workId, id, name, }) => {

  function OnCheck(){
    if(document.getElementById(id).checked){
      document.getElementById("workForm" + workId).style.borderColor = "#6BD425";
    }else{
      document.getElementById("workForm" + workId).style.borderColor = "#AF125A";
    }
    console.log("Changed border");
  }

  return (
    <div className={classNameComponent}>
        <div className={classNameDiv}>
            <label htmlFor={id} className={classNameLabel}>
            {title} 
            <input type="checkbox" id={id} name={name} className={classNameInput} onClick={OnCheck}/>
            </label> 
        </div>
    </div>
  )
}

export default AddCheckbox