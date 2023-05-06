import React, { useState } from "react";
import "../Profile/Profile.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AppBar, Tab, Tabs } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import MyEvents from "./MyEvents";
import PurchaseTickets from "./PurchaseTickets";

function Profile() {
  const data = useLocation();
  const dataValue = data.state !== null ? data.state.data : 0;
  const [selectedTab, setSelectedTab] = useState(dataValue);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <div className="profile-main">
        <Header />
        <div className="container-fluid profile-container mt-5">
          <h1 className="profile-heading">Profile</h1>
          <h3 className="mt-4">Hey, Username!</h3>
          <AppBar
            position="static"
            className="tab_bar mt-5 tabBG"
            id="mobBoxtab"
          >
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab label="My Events" />
              <Tab label="Purchase Tickets" />
            </Tabs>
          </AppBar>
          {selectedTab === 0 && <MyEvents />}
          {selectedTab === 1 && <PurchaseTickets />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Profile;
