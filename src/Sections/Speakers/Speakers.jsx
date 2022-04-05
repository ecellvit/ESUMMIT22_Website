import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Speakers.css";
import abhi from "../../Assets/abhi.jpg";
import aman from "../../Assets/aman.jpg";
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
              <img src={abhi} alt="Speaker" />
              <div className="speaker-detail">
                <div>Abhinav Aurora</div>
                <div>Co-founder</div>
                <div>Avalon Meta</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={aman} alt="Speaker" />
              <div className="speaker-detail">
                <div>Aman Dhattarwal</div>
                <div>Youtuber &amp; Founder</div>
                <div>Apni Kaksha</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={dk} alt="Speaker" />
              <div className="speaker-detail">
                <div>Deepak Pareek</div>
                <div>Co-Founder</div>
                <div>Career Keeda</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
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
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Speakers;
