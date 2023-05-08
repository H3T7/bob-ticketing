import React from "react";
import "../AllEvents/AllEvents.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllEventsBG from "../../assest/img/All_Events.svg";
import MyEventsCard from "../Profile/MyEventsCard";

function AllEvents() {
  return (
    <>
      <div className="all-events-main">
        <Header />

        <div className="all-events-1">
          <div className="all-events-1-left">
            <div className="all-events-1-left-text">
              <p className="all-events-Event-para">
                <span>Event</span>-ing the
                <br />
                Best.Day.Ever.
              </p>
            </div>
            <div className="all-events-1-left-divs">
              <div className="all-events-1-left-divs-inner">
                <p className="all-events-2k">2k+</p>
                <p className="all-events-2k-text">Events Hosted</p>
              </div>
              <div className="all-events-1-left-divs-inner">
                <p className="all-events-2k">100+</p>
                <p className="all-events-2k-text">Live Events</p>
              </div>
            </div>
          </div>
          <div className="all-events-1-right">
            <img src={AllEventsBG} alt="" />
          </div>
        </div>

        <div className="all-events-2">
          <div className="all-events-2-title-dropdown">
            <div className="all-events-2-title">
              <h2>
                <span style={{ color: "#7848F4" }}>Events </span>around you
              </h2>
            </div>
            <div className="all-events-2-dropdown">
              <div className="all-events-2-dropdown-inner">
                <select className="all-events-2-select">
                  <option selected>Weekdays</option>
                  <option>Weekend</option>
                </select>
              </div>
              <div className="all-events-2-dropdown-inner">
                <select className="all-events-2-select">
                  <option selected disabled>
                    Event type
                  </option>
                  <option>Event type 1</option>
                  <option>Event type 2</option>
                </select>
              </div>
              <div className="all-events-2-dropdown-inner">
                <select className="all-events-2-select">
                  <option selected disabled>
                    Category
                  </option>
                  <option>category 1</option>
                  <option>category 1</option>
                  <option>Any category</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="MyEvents-main all-events-cards">
          <MyEventsCard/>
          <MyEventsCard/>
          <MyEventsCard/>
          <MyEventsCard/>
          <MyEventsCard/>
          <MyEventsCard/>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AllEvents;
