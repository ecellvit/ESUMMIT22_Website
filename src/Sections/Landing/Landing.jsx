import React, { useState, useEffect } from "react";
import LOGO from "../../Assets/logo.png";
import Burger from "../../Components/Burger/Burger";
import Menu from "../../Components/Menu/Menu";
import bg from "../../Assets/land.png";
import "vscode-codicons/dist/codicon.css";
import "./Landing.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  const [open, setOpen] = useState(false);
  const menuId = "main-menu";
  return (
      <div className="container">
        <div id="blue-bg">
          <nav className="flex justify-between">
            {/* <div className="lefty flex items-center">
              <div className="logo">
                <img src={LOGO} alt="E-Summit" />
              </div>
            </div> */}
            <div className="righty">
              <Menu />
            </div>
            <div className="rightcode">
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            </div>
          </nav>
          <div className="content">
            <p className="top">E-Cell, VIT Presents</p>
            <h1>E-SUMMIT'22</h1>
            <p className="bottom">
              The 5th edition of the biggest business fest in South India
            </p>
            <div>
              {/* <a href="https://discord.gg/mtaDWMDPwH">
                <button className="btn btn-primary">Register</button>
              </a>{" "} */}
              <Link to="events">
                <button className="btn btn-primary">View Events</button>
              </Link>
            </div>
            <div>
            <img src={bg} alt="bg_logo" className="bg" />
            
          </div>
          </div>
         
        </div>
        {/* <div id="black-bg"></div> */}
        <Sidebar open={open} setOpen={setOpen} id={menuId} />
      </div>
  );
}

export default Landing;

