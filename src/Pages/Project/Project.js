import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Heroimg2 from '../../Component/Herroing2/Heroimg2'
import Cards from '../../Component/ProjectsCards/Cards'
const Project = () => {
  return (
    <>
    <Navbar/>
    <Heroimg2 heading={"Projects"} text={"some of my recent works "}/>
<Cards/>
    <Footer/>


    </>
  )
}

export default Project