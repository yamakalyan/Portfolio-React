import { useState } from 'react'

export default function ScrollBtn() {
    const [visble, setVisible] = useState(false)

    const handleScrolling = ()=>{
        const ScrollToDirection = document.documentElement.scrollTop
        if (ScrollToDirection > 300) {
            setVisible(true)
        } else if(ScrollToDirection <= 300){
            setVisible(false)
        }
    }
 const handleClickScroll =()=>{
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
 }
 window.addEventListener('scroll', handleScrolling)

  return (
    <>
    <div>
        <button className='scroll-btn'
         style={{display : visble ? 'inline' : 'none'}} onClick={handleClickScroll}>
           Up
        </button>
    </div>
      
    </>
  )
}
