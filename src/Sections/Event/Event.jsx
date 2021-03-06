import React, { useEffect } from "react";
import "./Event.css";
import EventCard from "../../Components/EventCard/EventCard";
import Aos from "aos";
import "aos/dist/aos.css";

function Event() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <>
      <div id="events">
        <div data-aos="flip-left" className="separator"></div>
        <div className="list-wrapper">
          <span data-aos="flip-left" className="event-head">
            Events
          </span>
          <div className="rb-container">
            <ul className="rb">
             
              <li>
                <div className="list-title">18th April -- Day 1</div>
                <div data-aos="flip-left">
                  <EventCard
                    head="E-Talk"
                    link="https://bit.ly/E-TalkRegistration"
                    tagline="An aural expedition into the entrepreneurial arena"
                    reg="start"
                    content="Like a leitmotif, there exists the ubiquitous fanfare about the business coliseum. Veterans for the improvement of the entrepreneurial milieu embrace the younger minds equipped to ideate with their experiential journeys.
                    E-Talk brings an opportunity for the eminent young minds for bringing ambitious solutions in the arena of new age thinking."
                  />
                </div>
                <div data-aos="flip-right">
                  <EventCard
                    head="StockShire"
                    link="https://bit.ly/3DX0Kic"
                    tagline="Explore the Investor within you"
                    reg="start"
                    content="From keeping a tab on the prices to finding the best value for money, a trader is made by its intention of finding the finest and the best performing stocks. 
                    A plethora of stocks to balance and jigger the portfolios following the rise and fall at the NSE, StockShire is a real time stock simulation providing cognizance of the stock exchange and the trading forum."
                  />
                </div>
              </li>
              <li>
                <div className="list-title">19th April -- Day 2</div>
               
                <div data-aos="flip-left">
                  <EventCard
                    head="Innoventure"
                    link="https://bit.ly/InnoventureRegistration"
                    tagline="Time to initiate and invent"
                    reg="start"
                    content="A multi - level business competition that shall put your entrepreneurial wit and grit to test with challenging situations and problem statements at every step.
                    To solve these, one must strategize, manage the crisis at hand and get their numbers right. And only then can they claim the crown of Innoventure.
                   
                   "
                  />
                </div>
                <div data-aos="flip-right">
                  <EventCard
                    head="VisionX"
                    link=""
                    tagline="Envisioning a utopian odyssey of pioneering technology"
                    reg="end"
                    content="Visualize a single platform, with all the bibles of Business accessible. 
                    A workshop that starts from the E and ends at the P of Entrepreneurship. 
                    A verbally orated manual, VisionX guides every aspiring entrepreneur through all the possibly thinkable obstacles of the tricky terrain of becoming a professional. 
                    
                    A tech-biz workshop providing hands on experience of the factors mentioned above, VisionX is all that and more!"
                  />
                </div>
               
              </li>
              <li>
                <div className="list-title">20th April -- Day 3</div>
                {/* <div data-aos="flip-left">
                  <EventCard
                    head="Med-Tech Challenge"
                    link=""
                    reg="end"
                    content="Med-Tech challenge is a pitching competition that invites people to come up with ideas or prototypes capable of producing an impactful change in the medical sector. Visionary ideas with worthy pitches get incubation under VITTBI."
                  />
                </div> */}
                <div data-aos="flip-right">
                  <EventCard
                    head="Impetus"
                    link="https://bit.ly/ImpetusRegistartion"
                    tagline="Where passion drives innovation"
                    reg="start"
                    content="Starting off with a fresh slate, the business plans are ideated under the scrutiny of the investors, concepts materialised through presentations leading to the creation of an unequalled venture proposition. 
                    E-Cell, VIT brings to you Impetus, a pitch deck competition designed in a way to make the inner entrepreneurs of the young minds take over their normal selves and blooming out of the chrysalis"
                  />
                </div>
                {/* <div data-aos="flip-right">
                  <EventCard
                    head="Emanate"
                    link=""
                    tagline="Business Plan Competition"
                    reg="end"
                    content="???Emanate??? is a national level competition being organised by E-Cell, VIT in collaboration with the Ministry of Electronics and IT and VIT-TBI."
                  />
                </div> */}
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
