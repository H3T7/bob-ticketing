import React from "react";
import "../AllEvents/AllEvents.css";
import { Link } from "react-router-dom";
import createimg from "../../assest/img/createimg.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllEventsBG from "../../assest/img/All_Events.svg";
import MyEventsCard from "../Profile/MyEventsCard";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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
                  <option>Category 1</option>
                  <option>Category 2</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="MyEvents-main all-events-cards">
            <MyEventsCard />
            <MyEventsCard />
            <MyEventsCard />
            <MyEventsCard />
            <MyEventsCard />
            <MyEventsCard />
            <MyEventsCard />
            <MyEventsCard />
          </div>
        </div>

        <div className="all-events-seemore-btn">
        <button>
          See More  <KeyboardDoubleArrowDownIcon className="all-events-seemore-icon"/>
        </button>
        </div>

        {/* <div className="row">
          <div className="boxcreate mt-4">
            <div className="row">
              <div className="col-md-6 text-center">
                <img src={createimg} alt="" className="imgcreate" />
              </div>
              <div className="col-md-6 mt-5">
                <h4>Create your own Event </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Link to="/createevent">
                <button className="eventBtn">Create Event</button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row all-events-img-div">
          <div className="col-md-6 text-center abc"><img src={createimg} alt="" className="all-events-img" /></div>
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-6 all-events-img-text">
          <h2>Create your own Event </h2>
                <p className="all-events-img-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Link to="/createevent">
                <button className="eventBtn mt-2">Create Event</button>
                </Link>
          </div>
          
        </div>

        
              <h2 style={{padding: '0px 50px', marginTop:'50px'}}>
                Upcoming <span style={{ color: "#7848F4" }}>Events</span>
              </h2>
              
            <hr/>
            <div className="MyEvents-main all-events-cards">
            <MyEventsCard />
            <MyEventsCard />
            <MyEventsCard />
            </div>

        

        <Footer />
        {/* <div style={{ backgroundColor: "pink", height: "200px", marginTop:'100px' }}></div> */}
      </div>
    </>
  );
}

export default AllEvents;
