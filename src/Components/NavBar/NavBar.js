import React from 'react'
import "../../Styles/NavBar.css"
import NavButton from './NavButton'

import HomeIcon from "../../Svg/Home.svg"
import AddIcon  from "../../Svg/AddPerson.svg"
import ListIcon from "../../Svg/ListTasks.svg"

const NavBar = () => {
  return (
    <div className='NavBar'>
        <NavButton icon={HomeIcon} alt="HomeIcon" onClick={""}/>
        <NavButton icon={AddIcon} alt="HomeIcon" onClick={""}/>
        <NavButton icon={ListIcon} alt="HomeIcon" onClick={""}/>
    </div>
  )
}

export default NavBar