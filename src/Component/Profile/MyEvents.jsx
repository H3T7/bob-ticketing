import React from "react";
import "./Profile.css";
import MyEventsCard from "./MyEventsCard";

const MyEvents = () => {
  return (
    <>
      <div className="MyEvents-main mt-5">
        <MyEventsCard />
        <MyEventsCard />
        <MyEventsCard />
        <MyEventsCard />
        <MyEventsCard />
      </div>
    </>
  );
};

export default MyEvents;
