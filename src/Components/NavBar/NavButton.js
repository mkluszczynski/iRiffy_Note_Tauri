import React from 'react'
import "../../Styles/NavBar.css"

const NavButton = ({icon, onClick, alt}) => {
  return (
    <div onClick={onClick} className="NavButton">
        <img src={icon} alt={alt} className="NavButtonIcon"/>
    </div>
  )
}

export default NavButton