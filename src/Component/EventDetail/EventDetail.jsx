import React from "react";
import "../EventDetail/EventDetail.css";
import EventDetailBG from "../../assest/img/Event_Detail.svg";

function EventDetail() {
  return (
    <>
      <div className="event-detail-main">
        <h1 className="event-detail-title">Event Title</h1>
        <div className="event-detail-img-div">
          <img src={EventDetailBG} alt="" />
        </div>

        <div className="event-detail-container container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h4>Event Title</h4>
                <p className="event-detail-text">Name of an Event</p>
              </div>
              <div className="mt-3">
                <h4>Event Date</h4>
                <p className="event-detail-text">May 3, 2023</p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h4>Event Location</h4>
                <p className="event-detail-text">Ahmedabad</p>
              </div>
              <div className="mt-3">
                <h4>Event Time</h4>
                <p className="event-detail-text">10:00 AM To 12:00 PM</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-4">
              <h4>Event Description</h4>
              <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis repellat autem id odit dignissimos dicta quisquam sequi in. Voluptas laudantium commodi odit eum, laboriosam ratione, ab dicta amet perferendis sit omnis vel deserunt? Accusantium, fuga nihil exercitationem quasi iure illo assumenda hic, iste ducimus voluptatem laborum? Quod rerum corrupti deleniti officiis deserunt quas laboriosam officia dolorem sapiente recusandae veniam eos quaerat dolore qui soluta quibusdam, ab ut voluptates. Dolor quam odio error quia mollitia nisi nulla ea! Tempora natus ad iure delectus, fuga dolores repudiandae nostrum odio ut quisquam libero earum provident, minus porro perferendis facilis error numquam magnam!</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 event-detail-num">
              <h4 className="">Total Tickets</h4>
              <p className="event-detail-text event-detail-nums">50</p>
            </div>
            <div className="col-md-4 event-detail-num">
            <h4 className="">Available Tickets</h4>
              <p className="event-detail-text event-detail-nums">30</p>
            </div>
            <div className="col-md-4 event-detail-num">
            <h4 className="">Sold Tickets</h4>
              <p className="event-detail-text event-detail-nums">20</p>
            </div>
          </div>
          <div className="mt-4 event-detail-btn"><button className="save-btn">Buy</button></div>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
