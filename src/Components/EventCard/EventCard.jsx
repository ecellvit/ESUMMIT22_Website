import React from "react";
import "./EventCard.css";

function EventCard(props) {
  return (
    <div className="list-item">
      <div
        className={`list-text ${
          props.head.indexOf(" ") !== -1
            ? props.head.substr(0, props.head.indexOf(" "))
            : props.head
        }`}
      >
        <div className="list-text-inner">
          <div className="grid">
            <h1>{props.head}</h1>
            <div className="img"></div>
          </div>
          <h3>{props.tagline}</h3>
          <p>
            <span>{props.content.substr(0, 100)}</span>
            <span className="extra">{props.content.substr(100)}</span>
          </p>
          {props.link === "" ? (
            <button className={`btn-events ${props.reg}`}>
              {props.ans === "close" ? "Registeration Closed" : ""}
              {props.reg === "start" ? "end" : "Coming Soon"}
            </button>
          ) : (
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className={`btn-events pointerhover`}>{props.reg === "start" ? "Register" : "Registeration Closed"}</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
