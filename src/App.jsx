import {useState} from "react";
import Home from "./componants/Home";
import Navbar from "./componants/Navbar";
import ScrollBtn from "./componants/ScrollBtn";
import "./componants/Port.css"
const App =()=>{
  const [bg, setBg] = useState('light')
  const [btn, setBtn] = useState('Dark')
  const [btnColor, setBtnColor] = useState('outline-dark')

  const changeBg =()=>{
      if (bg === 'light') {
        setBg('dark')
        setBtn('light')
        setBtnColor('outline-light')
        document.body.style.background = '#13233a'
      } else {
        setBg('light')
        setBtn('dark')
        setBtnColor('outline-dark')
        document.body.style.background = 'rgb(25 72 53 / 89%)'
      }
  }
  return(
    <div className="main">
    <Navbar changeBg={changeBg} bg={bg} btn={btn} btnColor={btnColor}/>
    <Home/>
    <ScrollBtn/>
    </div>
  )
}
export default App