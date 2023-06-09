import React from "react";
import "../HomePage/HomePage.css";
import HomeBG from "../../assest/img/Home.svg";
import { BsSearch } from "react-icons/bs";
import createimg from "../../assest/img/createimg.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function HomePage() {
   const settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,
     initialSlide: 0,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };
   const Images = [
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
     {
       img: HomeBG,
     },
   ];
  return (
    <>
      <Header />
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
        <h2 className="text-center mt-3 texthome">Events</h2>
        <div className="p-4">
          <Slider {...settings}>
            {Images.map((item, index) => {
              return (
                <div key={index} className="p-2">
                  <img src={item.img} alt="" className="eventsimage" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="row">
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
        </div>
        <br />
        <h2 className="text-center py-3 upcomingevent texthome">Upcoming Events</h2>
        <div className="p-4 mt-2">
          <div>
            <Slider {...settings}>
              {Images.map((item, index) => {
                return (
                  <div key={index} className="p-2">
                    <img src={item.img} alt="" className="eventsimage" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
