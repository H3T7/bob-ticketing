import React from 'react';
import "../AllEvents/AllEvents.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AllEventsBG from '../../assest/img/All_Events.svg'

function AllEvents() {
  return (
    <>
    <div className="all-events-main">

      <Header/>

      <div className="all-events-1">
        <div className="all-events-1-left">
          <div className="all-events-1-left-text">
          <p className='all-events-Event-para'><span>Event</span>-ing the<br/>Best.Day.Ever.</p>
          </div>
          <div className="all-events-1-left-divs">
              <div className="all-events-1-left-divs-inner">
                <p className='all-events-2k'>2k+</p>
                <p className='all-events-2k-text'>Events Hosted</p>
              </div>
              <div className="all-events-1-left-divs-inner">
              <p className='all-events-2k'>100+</p>
                <p className='all-events-2k-text'>Live Events</p>
              </div>
          </div>
        </div>
        <div className="all-events-1-right">
          <img src={AllEventsBG} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default AllEvents;