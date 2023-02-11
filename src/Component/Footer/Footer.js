import React from 'react'
import "./Footer.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <h4> <FaHome fontSize={20} style={{ color: "#fff", marginRight: "2rem" }} />Barauli Gopalganj Bihar </h4>
            <div>
              <p>India</p>
            </div>
            <div className="phone-number">
              <h4> <FaPhone fontSize={20} style={{ color: "#fff", marginRight: "2rem" }} /> +91725880743</h4>

            </div>
            <div className="email">
              <h4> <FaMailBulk fontSize={20} style={{ color: "#fff", marginRight: "2rem" }} /> Yarunkumar136@gmail.com</h4>

            </div>
          </div>

          <div className="right">
            <h4>About the Me</h4>
            <p>Hi my name is Arun Kumar Yadav I have compleated my Diploma with Computer Science & Engineering and also pursing B.tech in Computer Science & Engineering I am Graduate 2023.</p>
            <div className="social">
            </div>
            <a href="https://www.facebook.com/profile.php?id=100006932405793" target="_blank"  rel="noreferrer">
              <FaFacebook className='icon' fontSize={30} style={{ color: "#3b5998", marginRight: "1rem", cursor: 'pointer' }} />
            </a>
            <a href="https://twitter.com/yarunkumar136" target="_blank"  rel="noreferrer">
              <FaTwitter className='icon' fontSize={30} style={{ color: "#1DA1F2", marginRight: "1rem", cursor: 'pointer' }} />
              </a>
            
              <a href="https://www.linkedin.com/in/arun-yadav-314507154/" target="_blank"  rel="noreferrer">
                <FaLinkedinIn  className='icon' fontSize={30} style={{ color: " #0A66C2", marginRight: "1rem", cursor: 'pointer' }} />
              </a>
              
              <a href="https://www.instagram.com/arunkumar8056/" target="_blank"  rel="noreferrer">
                <FaInstagram className='icon' fontSize={30} style={{ color: "red", marginRight: "1rem", cursor: 'pointer' }} />
              </a>
              <a href="https://wa.me/+917258807043" target="_blank"  rel="noreferrer">
                <FaWhatsapp  className='icon' fontSize={30} style={{ color: "green", marginRight: "1rem", cursor: 'pointer' }}

                />
              </a>
          </div>

        </div>

      </div>

    </>
  )
}

export default Footer