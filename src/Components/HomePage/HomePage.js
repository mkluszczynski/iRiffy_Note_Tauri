import React from 'react'
import "../../Styles/HomePage.css"
import Logo from "../../Svg/iRiffyNoteLogo.svg"
import Line from "../../Svg/Line.svg"

const HomePage = () => {
  return (
    <div className='HomePageMain'>
        <img src={Logo} alt="Logo" className='HomePageLogo'/>
        <h1 className='HomePageTitle'>Notatnik iRiffy</h1>

        <h3 className='HomePageInfo'>Ilość zleceń: 00</h3>
        <h3 className='HomePageInfo'>Ilość prac do zrobienia: 00</h3>
        <h3 className='HomePageInfo'>Ilość wykonanych prac: 00</h3>

        <img src={Line} alt="Line" className='HomePageLine'/>

        <h3 className='HomePageInfo'>Ilość wykonanych zleceń: 00</h3>
        <h3 className='HomePageInfo'>Całkowity przychód: 00</h3>
    </div>
  )
}

export default HomePage