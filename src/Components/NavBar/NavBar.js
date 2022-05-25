import React from 'react'
import "../../Styles/NavBar.css"
import NavButton from './NavButton'

import HomeIcon from "../../Svg/Home.svg"
import AddIcon  from "../../Svg/AddPerson.svg"
import ListIcon from "../../Svg/ListTasks.svg"

const NavBar = ({onHomeClick, onAddClick, onListClick}) => {
  return (
    <div className='NavBar'>
        <NavButton icon={HomeIcon} alt="HomeIcon" onClick={onHomeClick}/>
        <NavButton icon={AddIcon} alt="HomeIcon" onClick={onAddClick}/>
        <NavButton icon={ListIcon} alt="HomeIcon" onClick={onListClick}/>
    </div>
  )
}

export default NavBar