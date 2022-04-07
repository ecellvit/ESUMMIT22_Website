import React, { useState, useEffect } from "react";
import LOGO from "../../Assets/logo.png";
import Burger from "../../Components/Burger/Burger";
import Menu from "../../Components/Menu/Menu";
import bg from "../../Assets/bg_logo.png";
import "vscode-codicons/dist/codicon.css";
import "./Landing.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-scroll";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  const [open, setOpen] = useState(false);
  const menuId = "main-menu";
  return (
    <div>
      <svg width="0" height="0">
        <defs>
          {/* <clipPath id="myClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 H 0.728 C 0.760,0,0.76,0.057,0.744,0.104 L 0.483,0.87 C 0.477,0.889,0.466,0.902,0.452,0.904 L 0,1 V 0 Z" />
          </clipPath> */}
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          {/* <clipPath id="myCliped" clipPathUnits="objectBoundingBox">
            <path d="M 0.776,0.039 C 0.786,0.015,0.787,0,0.824,0 H 1 V 0.813 L 0.543,0.88 C 0.543,0.88,0.491,0.879,0.522,0.794 L 0.776,0.039" />
          </clipPath> */}
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          {/* <clipPath id="myClipS" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.763 C1,0.777,0.973,0.809,0.933,0.816 L0.127,0.987 C0.09,0.996,0,0.98,0,0.94 V0" />
          </clipPath> */}
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClipedS" clipPathUnits="objectBoundingBox">
            <path d="M0,0.419 C0,0.395,0.005,0.356,0.056,0.325 L0.873,0.025 C0.956,0.00,1,0.061,1,0.17 V1 H0 V0.419" />
          </clipPath>
        </defs>
      </svg>
      <div className="container">
        <div id="blue-bg">
          <nav className="flex justify-between">
            <div className="lefty flex items-center">
              <div className="logo">
                <img src={LOGO} alt="E-Summit" />
              </div>
            </div>
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
              <a href="https://discord.gg/mtaDWMDPwH">
                <button className="btn btn-primary">Register</button>
              </a>{" "}
              {/* <Link to="events">
                <button className="btn btn-primary">View Events</button>
              </Link> */}
            </div>
            <div>
            <img src={bg} alt="bg_logo" className="bg" />
            
          </div>
          </div>
         
        </div>
        {/* <div id="black-bg"></div> */}
        <Sidebar open={open} setOpen={setOpen} id={menuId} />
      </div>
    </div>
  );
}

export default Landing;

