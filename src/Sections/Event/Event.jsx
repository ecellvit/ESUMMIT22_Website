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
                    link="https://dare2compete.com/o/2iWdVzc?refId=SXRkCzq"
                    // reg="end"
                    content="Like a leitmotif, there exists the ubiquitous fanfare about the business coliseum. Veterans for the improvement of the entrepreneurial milieu embrace the younger minds equipped to ideate with their experiential journeys.
                    E-Talk brings an opportunity for the eminent young minds for bringing ambitious solutions in the arena of new age thinking."
                  />
                </div>
                <div data-aos="flip-right">
                  <EventCard
                    head="StockShire"
                    link="https://dare2compete.com/o/hsu3tZ8?refId=wSYoN41"
                    reg="end"
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
                    link="https://dare2compete.com/o/uP08Dfx?refId=SXRkCzq"
                    reg="end"
                    content="A multi - level business competition that shall put your entrepreneurial wit and grit to test with challenging situations and problem statements at every step.

                    To solve these, one must strategize, manage the crisis at hand and get their numbers right. And only then can they claim the crown of Innoventure.
                   
                   "
                  />
                </div>
                <div data-aos="flip-right">
                  <EventCard
                    head="VisionX"
                    link="https://dare2compete.com/o/hsu3tZ8?refId=wSYoN41"
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
                    link="https://dare2compete.com/o/hsu3tZ8?refId=wSYoN41"
                    reg="end"
                    content="Starting off with a fresh slate, the business plans are ideated under the scrutiny of the investors, concepts materialised through presentations leading to the creation of an unequalled venture proposition. 
                    E-Cell, VIT brings to you Impetus, a pitch deck competition designed in a way to make the inner entrepreneurs of the young minds take over their normal selves and blooming out of the chrysalis"
                  />
                </div>
                {/* <div data-aos="flip-right">
                  <EventCard
                    head="E-Hack"
                    link="https://ehack.ecellvit.com/"
                    reg="start"
                    content="E-Hack is an overnight Hackathon that aims to find the leaders of tomorrow. Challenging participants to come up with effective solutions to real-world problems, this event is one comprehensive test of grit, resilience and innovation."
                  />
                </div> */}
              </li>
              {/* <li>
                <div className="list-title">19th April -- Day 3</div>
                <div data-aos="flip-left">
                  <EventCard
                    head="Start-Up Internship Expo"
                    link="https://expo.ecellvit.com/"
                    reg="start"
                    content="Start-up Internship Expo provides students with the chance of enriching themselves with industrial knowledge. Major startups from all over India become a part of this motion by providing exciting internship offers to bright minds."
                  />
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
