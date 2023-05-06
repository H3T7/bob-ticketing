import React from "react";
import MyEventsCard from "./MyEventsCard";
import "./Profile.css";

const PurchaseTickets = () => {
  return (
    <>
      <div className="MyEvents-main mt-5">
        <MyEventsCard />
        <MyEventsCard />
      </div>
    </>
  );
};

export default PurchaseTickets;
