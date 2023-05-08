import React from "react";
import MyEventsBG from "../../assest/img/MyEvents.svg";
import "./Profile.css";

const MyEventsCard = () => {
  return (
    <>
      <div className="my-event-card-main mt-1">
        <div className="my-event-card-img-div">
          <img src={MyEventsBG} alt="" />
        </div>
        <div className="my-event-card-title mt-3">
          <h5>
            BestSeller Book Bootcamp - Write, Market & Publish Your Book -
            Lucknow
          </h5>
        </div>
        <div className="my-event-card-time-btn mt-3">
          <div className="my-event-card-time-btn-1">
            <p className="my-event-card-para">Saturday, March 18, 9:30 PM</p>
            <p>ONLINE EVENT - Attend from anywhere</p>
          </div>
          <div className="my-event-card-time-btn-2 mb-2">
            <button className="save-btn">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEventsCard;
