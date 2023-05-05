import React from "react";
import "../CreateEvent/CreateEvent.css";
import EventBG from "../../assest/Event.svg";
import DatePicker from "react-datepicker";

function CreateEvent() {
  return (
    <>
      <div className="create-event-main">
        <div className="create-event-img">
          <img src={EventBG} alt="" />
        </div>

        <div className="create-event-form container">
          <h2 className="create-event-heading mt-5 mb-4">Create Event</h2>

          <div className="row create-event-form-inner">
            <div className="col-md-6">
              <div className="create-event-input-div mt-3">
                <h5>Event Title</h5>
                <input type="text" className="mt-1 create-event-input" />
              </div>
              <div className="create-event-input-div mt-3">
                <h5>Start Time</h5>
                <DatePicker className="mt-1 create-event-input" />
              </div>
              <div className="create-event-input-div mt-3">
                <h5>Start Date</h5>
                <DatePicker className="mt-1 create-event-input" />
              </div>
              <div className="create-event-input-div mt-3">
                <h5>Total Number of Tickets</h5>
                <input type="number" className="mt-1 create-event-input" />
              </div>
              <div className="create-event-input-div mt-3">
                <h5>Event Image</h5>
                <input type="file" className="mt-1 create-event-input" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="create-event-input-div mt-3">
                <h5>Event Venue</h5>
                <input type="text" className="mt-1 create-event-input" />
              </div>
              <div className="create-event-input-div mt-3">
                <h5>End Time</h5>
                <DatePicker className="mt-1 create-event-input" />
              </div>
              <div className="create-event-input-div mt-3">
                <h5>End Date</h5>
                <DatePicker className="mt-1 create-event-input" />
              </div>
              <div className="create-event-input-div mt-3">
                <h5>Event Type</h5>
                <input type="text" className="mt-1 create-event-input" />
              </div>
              <div className="create-event-input-div mt-3 ">
                <h5>Event Description</h5>
                <textarea className="mt-1 create-event-input" />
              </div>
            </div>

            <div className="create-event-btn-div mt-4 mb-2">
            <button className="save-btn">Save</button>
          </div>
          </div>

          <div className="inputGroup">
    <input type="text" required="" autocomplete="off" />
    <label for="name">Name</label>
</div>
         
        </div>
      </div>
    </>
  );
}

export default CreateEvent;
