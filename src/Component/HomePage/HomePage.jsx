import React from "react";
import "../HomePage/HomePage.css";
import HomeBG from "../../assest/img/Home.svg";
import { BsSearch } from "react-icons/bs";
import createimg from "../../assest/img/createimg.png";
import Footer from "../Footer/Footer";
function HomePage() {
  return (
    <>
      <div className="homepage">
        <img src={HomeBG} alt="" className="w-100" />
      </div>
      <div className="p-4">
        <div className="homebox">
          <div className="row  p-2 px-3 mt-1">
            <div className="col-md-4 px-5">
              <h5>Looking for</h5>
              <input
                type="text"
                className="inputboxhome"
                placeholder="Choose event type"
              />
            </div>
            <div className="col-md-3">
              <h5>Location</h5>
              <input
                type="text"
                className="inputboxhome"
                placeholder="Choose location"
              />
            </div>
            <div className="col-md-3 px-5">
              <h5>When</h5>
              <input
                type="text"
                className="inputboxhome"
                placeholder="Choose date and time"
              />
            </div>
            <div className="col-md-2 px-5 mt-4">
              <button className="searchbtn">
                <BsSearch />
              </button>
            </div>
          </div>
        </div>
        <br />
        <h2 className="text-center mt-5 texthome">Events</h2>
        <div className="p-4">
          <div className="row">
            <div className="col-md-4">
              <img src={HomeBG} alt="" className="eventsimage" />
            </div>
            <div className="col-md-4">
              <img src={HomeBG} alt="" className="eventsimage" />
            </div>
            <div className="col-md-4">
              <img src={HomeBG} alt="" className="eventsimage" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="boxcreate ">
            <div className="row">
            <div className="col-md-6 text-center">
              <img src={createimg} alt="" className="imgcreate" />
            </div>
            <div className="col-md-6 mt-5">
              <h4>Create your own Event </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <button className="eventBtn">Create Event</button>
            </div>
            </div>
          </div>
        </div>
         <br />
        <h2 className="text-center upcomingevent texthome">Upcoming Events</h2>
        <div className="p-4 mt-4">
          <div className="row">
            <div className="col-md-4">
              <img src={HomeBG} alt="" className="eventsimage" />
            </div>
            <div className="col-md-4">
              <img src={HomeBG} alt="" className="eventsimage" />
            </div>
            <div className="col-md-4">
              <img src={HomeBG} alt="" className="eventsimage" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
