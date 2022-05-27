import React from 'react'

const AddCheckbox = ({classNameComponent,classNameDiv, classNameLabel, classNameInput, title, id, name, }) => {
  return (
    <div className={classNameComponent}>
        <div className={classNameDiv}>
            <label for={id} className={classNameLabel}>
            {title} 
            <input type="checkbox" id={id} name={name} className={classNameInput}/>
            </label> 
        </div>
    </div>
  )
}

export default AddCheckbox