import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom';
import introImg from "../assets/bg.jpg";
const Heroimg = () => {
    return (
        <>
            <div className="hero">
                <div className="mask">
                    <img src={introImg} alt="introimg" className='intro-img' />
                </div>
                <div className="content">
                    <p>Hi , I `M Arun Yadav</p>
                    <h1>Front-end Developer</h1>

                
                        <Link to="/Project" className='btn'>Projects</Link>
                        <Link to="/Contact" className='btn-light'>Contact</Link>
                    


                </div>
            </div>





        </>
    )
}

export default Heroimg