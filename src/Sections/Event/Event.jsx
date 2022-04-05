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
                <div className="list-title">17th April -- Day 1</div>
                <div data-aos="flip-left">
                  <EventCard
                    head="E-Talk"
                    link="https://dare2compete.com/o/2iWdVzc?refId=SXRkCzq"
                    // reg="end"
                    content="Prominent speakers from the entrepreneurial world deliver a talk to promote the ethos of entrepreneurship in the campus. The session is open to the audience's questions, thus furnishing their minds with a clearer picture of entrepreneurship."
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
                {/* <div data-aos="flip-right">
                  <EventCard
                    head="E-Hack"
                    link="https://ehack.ecellvit.com/"
                    reg="start"
                    content="E-Hack is an overnight Hackathon that aims to find the leaders of tomorrow. Challenging participants to come up with effective solutions to real-world problems, this event is one comprehensive test of grit, resilience and innovation."
                  />
                </div> */}
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
                    head="Vision-X"
                    link="https://dare2compete.com/o/hsu3tZ8?refId=wSYoN41"
                    reg="end"
                    content="Innoventure is a business simulation that gives participants a platform to develop skills like product development and business analysis while inculcating knowledge about market trends and economic concepts that prevail in day-to-day applications."
                  />
                </div>
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
