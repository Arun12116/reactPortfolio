import React from 'react'
import "./Card.css";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";


const Cards = () => {
    return (
        <>
            <div className="Card-container">
                <div className="Sub-container">
                    <div className="card-img">
                        <img src={pro1} alt="img" />
                        <h1>Food Search Application</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim modi dignissimos ea corrupti rerum ratione minima asperiores quo delectus aperiam placeat, doloremque similique velit nostrum, totam quia accusamus fuga.</p>
                    </div>
                    <div className="source-container">
                       <a href="https://fastidious-tanuki-27df47.netlify.app/" target="_blank" rel="noreferrer"><button className='btn1'>View</button></a>
                       <a href="/"> <button className='btn2'>Source</button></a>

                    </div>


                </div>
                <div className="second-container">
                    <div className="second-card-img">
                        <img src={pro2} alt="img" />
                        <h1>Git-hub  Application</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim modi dignissimos ea corrupti rerum ratione minima asperiores quo delectus aperiam placeat, doloremque similique velit nostrum, totam quia accusamus fuga.</p>
                    </div>
                    <div className="source-container">
                    <a href="https://glistening-beijinho-71146b.netlify.app/" target="_blank" rel="noreferrer"><button className='btn1'>View</button></a>
                    <a href="/"> <button className='btn2'>Source</button></a>

                    </div>


                </div> <div className="third-container">
                    <div className="third-card-img">
                        <img src={pro3} alt="img" />
                        <h1>Keep Notes Application</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim modi dignissimos ea corrupti rerum ratione minima asperiores quo delectus aperiam placeat, doloremque similique velit nostrum, totam quia accusamus fuga.</p>
                    </div>
                    <div className="source-container">
                    <a href="https://shimmering-dango-7ee846.netlify.app/" target="_blank" rel="noreferrer"><button className='btn1'>View</button></a>
                    <a href="/"> <button className='btn2'>Source</button></a>

                    </div>


                </div> <div className="four-container">
                    <div className="four-card-img">
                        <img src={pro4} alt="img" />
                        <h1>Latest Movies Search Application</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim modi dignissimos ea corrupti rerum ratione minima asperiores quo delectus aperiam placeat, doloremque similique velit nostrum, totam quia accusamus fuga.</p>
                    </div>
                    <div className="source-container">
                    <a href="https://aesthetic-daffodil-f895a8.netlify.app/" target="_blank" rel="noreferrer"><button className='btn1'>View</button></a>
                    <a href="/"> <button className='btn2'>Source</button></a>

                    </div>


                </div>
                
            </div>
        </>
    )
}

export default Cards