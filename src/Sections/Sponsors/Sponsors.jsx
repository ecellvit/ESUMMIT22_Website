import React, { useEffect } from "react";
// import AW from "../../Assets/AWS.png";
// import DF from "../../Assets/Devfolio.png";
import WSS from "../../Assets/WSS2.png";
// import XF from "../../Assets/XDC.png";
// import PY from "../../Assets/Polygon.png";
// import TZ from "../../Assets/Tezos.png";
// import CE from "../../Assets/Celo.png";
// import PO from "../../Assets/Portis.png";
// import LW from "../../Assets/LWT.png";
// import DS from "../../Assets/DSIJ.png";
// import EL from "../../Assets/ELM.png";
// import SE from "../../Assets/StockEdge.png";
// import DZ from "../../Assets/Drinkzy.jpg";
// import LB from "../../Assets/LondonBubble.png";
// import GMC from "../../Assets/GMC.png";
// import NP from "../../Assets/NutriPanda.jpg";
// import SR from "../../Assets/scripts.png";
// import IB from "../../Assets/InterviewBuddy.png";
// import FP from "../../Assets/Fampay.PNG";
// import CF from "../../Assets/CFC.png";
// import VS from "../../Assets/vitspot.png";
// import XE from "../../Assets/100x.jpeg";
// import YI from "../../Assets/youth.jpeg";
// import GO from "../../Assets/grabon.png";
import PC from "../../Assets/precognitive.png";
import NP from "../../Assets/nutripanda.png";
import MT from "../../Assets/mircrotone.png";
import SG from "../../Assets/stockGro.png";
import WT from "../../Assets/wizerTech.png";
import ELM from "../../Assets/eLearnMarkets.png";
import SHS from "../../Assets/SwasthvrittaHealthSolutions.png";
import CB from "../../Assets/cheezyBurgers3.png";
import KT from "../../Assets/Krypto.png";
import "./Sponsors.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Sponsors() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <div className="past-sponsors" id="sponsors">
      <div className="sponsor-head">
        <span>Sponsors</span>
      </div>
      <div className="grid-container">
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://instagram.com/microtone_india?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={MT} alt="Sponsor Logo" />
          </a>
        </div>
        <div
          data-aos="flip-up"
          className="grid-item"
          target="_blank"
          rel="noreferrer"
        >
          <a
            href="https://instagram.com/stock_gro?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={SG} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://wizertech.com/" target="_blank" rel="noreferrer">
            <img src={WT} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://www.elearnmarkets.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ELM} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://instagram.com/swasthvritta?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={SHS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://instagram.com/cjbvellore?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={CB} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="" target="_blank" rel="noreferrer">
            <img src={KT} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://wharfstreetstudios.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WSS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.nutripanda.in" target="_blank" rel="noreferrer">
            <img src={NP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="http://www.precognitive.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={PC} alt="Sponsor Logo" />
          </a>
        </div>
        {/* <div data-aos="flip-up" className="grid-item">
          <a
            href="https://www.elearnmarkets.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={EL} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://stockedge.com/">
            <img src={SE} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.drinkzy.in/" target="_blank" rel="noreferrer">
            <img src={DZ} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://londonbubbleco.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LB} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.givemycertificate.com/">
            <img src={GMC} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.nutripanda.in/" target="_blank" rel="noreferrer">
            <img src={NP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://www.scriptindia.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SR} alt="Sponsor Logo" />
          </a>
        </div>

        <div data-aos="flip-up" className="grid-item">
          <a href="https://interviewbuddy.in/" target="_blank" rel="noreferrer">
            <img src={IB} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://fampay.in/" target="_blank" rel="noreferrer">
            <img src={FP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://codeforcause.org/" target="_blank" rel="noreferrer">
            <img src={CF} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://vitspot.com/" target="_blank" rel="noreferrer">
            <img src={VS} alt="VTISPOT LOGO" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a
            href="https://100xentrepreneur.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={XE} alt="100X entrepreneur LOGO" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://youthincmag.com/" target="_blank" rel="noreferrer">
            <img src={YI} alt="100X entrepreneur LOGO" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.grabon.in/" target="_blank" rel="noreferrer">
            <img src={GO} alt="100X entrepreneur LOGO" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://egghead.io/" target="_blank" rel="noreferrer">
            <img src={EH} alt="100X entrepreneur LOGO" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://ontribe.in/" target="_blank" rel="noreferrer">
            <img src={OT} alt="100X entrepreneur LOGO" />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Sponsors;
