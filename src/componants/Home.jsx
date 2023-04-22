import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaMobileAlt} from 'react-icons/fa'
// import './componants/Port.css'

function Home() {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <>
        <section id='home'>
            <div className='container-fluid '>
            <div className='row rounded'>
                <div className=' col-md-6 col-6 d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='text-dark'>Y A M A  K A L Y A N</h3><br/>
                <h5 className='text-dark'>WEB DEVOLOPER</h5><hr/>
                </div>
                <div className='col-md-6 col-6 my-3'>
                    <img src='kn.JPG' className='img-fluid shadow' alt=''/>
                </div>
            </div>
            </div>
        </section>

        <section id='skills' className='container-fluid'>
            <div className='container p-3'>
                    <h3 className='text-center text-primary'>Technical Skills</h3><hr/>
                <div className='row my-3'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                            <div className='html-div'>
                            <span className='html-text'>HTML : <p className='html'>90%</p></span>
                            </div>
                            <div>
                            <span>CSS : <p className='css'>80%</p></span>
                            </div>
                            <div>
                            <span>JavaScript : <p className='javascript'>60%</p></span>
                            </div>
                            <div>
                            <span>Bootstrap : <p className='bootstrap'>85%</p></span>
                            </div>
                            <div>
                            <span>React.js : <p className='react'>65%</p></span>
                            </div>
                            <div>
                            <span>Node.js : <p className='node'>75%</p></span>
                            </div>
                            <div>
                            <span>Express.js : <p className='express'>80%</p></span>
                            </div>
                            <div>
                            <span>mySql : <p className='mysql'>90%</p></span>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='projects' className='container-fluid'>
            <div className='container p-3'>
                    <h3 className='text-primary text-center'>Projects and Integrations</h3><hr/>
                <div className='row'>
                    <div className='col-md col-lg-2 me-3 rounded my-2 border border-1 bg-dark'>
                        <h6 className='text-center my-2'>Food Delivery app</h6><hr/>
                      <img src='kn.JPG' alt=''height='150px' width='150px' className='img-fluid m-3'/>
                      <div>
                      <p>you want to know more ?</p>
                      <button className='btn btn-success btn-sm my-2 float-end'>View ?</button>
                      </div>
                    </div>
                    <div className='col-md col-lg-2 me-3 rounded my-2 border border-1 bg-dark'>
                        <h6 className='text-center my-2'>Blood Donation app</h6><hr/>
                      <img src='kn.JPG' alt=''height='150px' width='150px' className='img-fluid m-3'/>
                      <div>
                      <p>you want to know more ?</p>
                      <button className='btn btn-success btn-sm float-end'>View ?</button>
                      </div>
                    </div>
                    <div className='col-md col-lg-2 me-3 rounded my-2 border border-1 bg-dark'>
                        <h6 className='text-center my-2'>Art Selling app</h6><hr/>
                      <img src='kn.JPG' alt=''height='150px' width='150px' className='img-fluid m-3'/>
                      <div>
                      <p>you want to know more ?</p>
                      <button className='btn btn-success btn-sm float-end'>View ?</button>
                      </div>
                    </div>
                    <div className='col-md col-lg-2 me-3 rounded my-2 border border-1 bg-dark'>
                        <h6 className='text-center my-2'>Youth app</h6><hr/>
                      <img src='kn.JPG' alt=''height='150px' width='150px' className='img-fluid m-3'/>
                      <div>
                      <p>you want to know more ?</p>
                      <button className='btn btn-success btn-sm float-end'>View ?</button>
                      </div>
                    </div>
                    <div className='col-md col-lg-2 me-3 rounded my-2 border border-1 bg-dark'>
                        <h6 className='text-center my-2'>CRUD app</h6><hr/>
                      <img src='kn.JPG' alt=''height='150px' width='150px' className='img-fluid m-3'/>
                      <div>
                      <p>you want to know more ?</p>
                      <button className='btn btn-success btn-sm float-end'>View ?</button>
                      </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='about' className='container-fluid '>
            <div className='container p-3'>
                <div className='row'>
                    <h4 className='text-primary text-center'>About Myself</h4><hr/>
        <div className='col-md-6 col-lg-6'>
                <p> As a fresh web devoloper, iam passioante and creative individual with a strong desire to learn and grow in the field of web devolopment.
                    I have recently completed my computer education. and gained a solid foundation in programming languagues such as html, css, javascript, bootstrap,
                    react.js, node.js and express.js, mySql. iam enthusiastic about utilizing my skills to create responsive, visually appealing, and user-friendly website.
                </p>
                <p>
                    My key strengths include a strong attention to details, excellent problem solving skills, and the ability to work well in a team environment.
                    i am also dedicated to staying up to date with the latest trends and technologies in web devolopment. ensuring that i am always providing my
                    clients with the best possible solutions. 
                </p>
        </div>
        <div className='col-md-6 col-lg-6'>
                <p> As a fresh web devoloper, iam passioante and creative individual with a strong desire to learn and grow in the field of web devolopment.
                    I have recently completed my computer education. and gained a solid foundation in programming languagues such as html, css, javascript, bootstrap,
                    react.js, node.js and express.js, mySql. iam enthusiastic about utilizing my skills to create responsive, visually appealing, and user-friendly website.
                </p>
                <p>
                    My key strengths include a strong attention to details, excellent problem solving skills, and the ability to work well in a team environment.
                    i am also dedicated to staying up to date with the latest trends and technologies in web devolopment. ensuring that i am always providing my
                    clients with the best possible solutions. 
                </p>
        </div>
                </div>
            </div>
        </section>

        <section id='contact' className='container-fluid'>
        <div className='container p-3'>
                <h4 className='text-primary text-center'>Contact me</h4><hr/>
            <div className='row'>
                <div className='text-center my-3'>
                <div className='links'>
                <span><a rel="noreferrer" target='_blank' href='https://github.com/yamakalyan'><FaMobileAlt/></a></span>
                <span><a rel="noreferrer" target='_blank' href='https://github.com/yamakalyan'><BsGithub/></a></span>
                <span><a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/yama-kalyan-821360266/?trk=nav_responsive_tab_profile_pic'><BsLinkedin /></a></span>
                <span><a rel="noreferrer" target='_blank' href='https://www.instagram.com/beautifulmind_00/?hl=en'><BsInstagram/></a></span>
                    </div>
                </div>
        <span className='text-center my-3'> © Copyright <b>Kalyan Yama</b>. All Rights Reserved {year} </span>
            </div>
            </div>
        </section>

    </>
  )
}

export default Home