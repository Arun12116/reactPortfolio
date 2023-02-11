import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState } from 'react';
const Navbar = () => {

  const [click, setClick] = useState(false);
  const handlClick = _ => {
    setClick(!click);
  }
  return (
    <>
      <div className="nav-Conatiner">
        <Link to={"/"}> <h1>Arun</h1></Link>
        <ul className={click ? "nav-Menu active" : "nav-Menu"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Project"}>Project</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>


        </ul>
        <div className="hamburger" onClick={handlClick}>
          {

            click ? (<FaTimes size={30} style={{ color: "white" }} />) :
              (<FaBars size={30} style={{ color: "white" }} />)


          }

        </div>
      </div>

    </>
  )
}

export default Navbar