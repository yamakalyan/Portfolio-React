import { useEffect, useState } from 'react'
// import { GoTools} from 'react-icons/go'
// import { BiHomeAlt} from 'react-icons/bi'
// import { DiGitBranch} from 'react-icons/di'
// import { AiOutlineUser} from 'react-icons/ai'
// import { GoDeviceMobile} from 'react-icons/go'


function Navbar() {
  const [visible, setVisible] = useState(false)

  const scrollbg =()=>{
    window.scrollY > 0 ? setVisible(true) : setVisible(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", scrollbg)
return ()=>{
  window.removeEventListener('scroll', scrollbg)
}
  }, [])

  return (
    <div className='main-nav'>
       <nav  className={visible ?"navbar navbar-expand-lg navbar-dark bg-dark" : `navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container p-2">
    <a  className="navbar-brand" href='#home'>KALYAN</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav me-auto">
        <li  className="nav-item">
          <a  className="nav-link" href='#skills'>Skills</a>
        </li>
        <li  className="nav-item">
         <a className='nav-link' href='#projects'>Projects</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link " href='#about'>About</a>
        </li>
        <li  className="nav-item">
         <a className='nav-link' href='#contact'>Contact</a>
        </li>
      </ul>
            {/* <button className={`btn btn-${btnColor}`} >{btn}</button> */}
           </div>
        </div>
      </nav>
      {visible &&
        <div className='below-nav'>
          <ul className='container'>
            <li>Information</li>
            <li>Details </li>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Conditions</li>
            <li>Explore</li>
            <li>Community</li>
          </ul>
        </div>
        }
{/* 
      <div className='container'>
        <div className='navbar-toggler downNav'>
          <ul className="navbar-nav ">
          <li  className="nav-item ">
         <a className='nav-link' href='#home'>
          <p>
          <BiHomeAlt/>
          </p>
          </a>
        </li>
          <li  className="nav-item">
          <a  className="nav-link" href='#skills'>
            <p>
              <GoTools/>
              </p>
              </a>
        </li>
        <li  className="nav-item">
         <a className='nav-link' href='#projects'>
          <p>
          <DiGitBranch/>
          </p>
          </a>
        </li>
          <li  className="nav-item ">
          <a  className="nav-link " href='#about'>
            <p>
            <AiOutlineUser/>
            </p>
            </a>
        </li>
        <li  className="nav-item ">
         <a className='nav-link' href='#contact'>
          <p>
          <GoDeviceMobile/>
          </p>
          </a>
        </li>
       
          </ul>
        </div>
      </div> */}
  </div>
  )
}

export default Navbar