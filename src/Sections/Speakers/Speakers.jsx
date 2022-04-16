import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Speakers.css";
import abhi from "../../Assets/abhi.jpg";
import aman from "../../Assets/aman.jpg";
import arjun from "../../Assets/arjun.JPG";
import alok from "../../Assets/alok.jpg";
import vishal from "../../Assets/vishal.jpg";
import dk from "../../Assets/dk.jpeg";
import neha from "../../Assets/neha.jpeg";
import poonam from "../../Assets/poonam.jpg";
import scott from "../../Assets/scott.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Speakers() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  return (
    <div id="speakers">
      <div data-aos="flip-left" className="separator">
        <span>Speakers</span>
      </div>
      <div className="carousel">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1200,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 768,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1200,
                min: 768,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={alok} alt="Speaker" />
              <div className="speaker-detail">
                <div>Alok Garodia</div>
                <div> Angel Investor and Advisor to Startups </div>
                <div>
                 VP JCB, Ex CFO Lenovo, Nike in India, 
                </div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={arjun} alt="Speaker" />
              <div className="speaker-detail">
                <div>Arjun Majumdar</div>
                <div>Founder, CEO</div>
                <div>Indiahikes</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img className="vishal-nair__image" src={vishal} alt="Speaker" />
              <div className="speaker-detail">
                <div>Mr. Vishal Nair</div>
                <div>Co-founder and Director</div>
                <div>LightNSalt (VisionX)</div>
              </div>
            </div>
          </div>
          {/* <div className="speaker-item">
            <div className="speaker-card">
              <img src={neha} alt="Speaker" />
              <div className="speaker-detail">
                <div>Neha Sharma</div>
                <div>Founder Secratory</div>
                <div>Society of Data Science</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={poonam} alt="Speaker" />
              <div className="speaker-detail">
                <div>Poonam Kaul</div>
                <div>Film Producer</div>
                <div>Ex-CMO Apple India | Ex-VP PepsiCo</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={scott} alt="Speaker" />
              <div className="speaker-detail">
                <div>Scott D. Clary</div>
                <div>Founder</div>
                <div>ROI Overload | The Success Story Podcast</div>
              </div>
            </div>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
}

export default Speakers;
