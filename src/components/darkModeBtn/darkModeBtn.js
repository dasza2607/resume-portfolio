import { useState, useEffect, useRef } from "react"
import sun from "./icon/sun.svg"
import moon from "./icon/moon.svg"
import "./style.css"

function DarkModeBtn (){

    const [darkMode, setDarkMode] = useState('light')
    const bntRef = useRef(null)

    useEffect(()=>{
        if(darkMode ==='dark'){
            document.body.classList.add('dark')
            bntRef.current.classList.add('dark-mode-btn--active')
        }else{
            document.body.classList.remove('dark')
            bntRef.current.classList.remove('dark-mode-btn--active')
        }

    },[darkMode])


    const toggleDarkMode = ()=>{
        setDarkMode((currentValue)=>{
            return currentValue==='light' ? 'dark' : 'light'

        })
    }

    return(
        <button ref={bntRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
   
    )
}

export default DarkModeBtn