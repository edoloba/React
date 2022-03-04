import React from "react";
import Menu from "./Navigations/Menu";
// import Menu from './Navigations/Menu';


const Navbar = (props) => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen)
      
    return(
        <>
        <Menu
        pageWrapId  = {props.pageWrapID}
        isOpen={props.isMenuOpen}
        toggleMenu={props.toggleMenu}

        />
        
     
          <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Library
            </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li className="hidden-xs">
              <a href="#about">About us</a>
            </li>
            <li>
              <button onClick={props.toggleMenu} className="btn btn-lg btn-outline">
                <i className="fa fa-graduation-cap" /> <span>Training</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
        </>
    )

    }

export default Navbar