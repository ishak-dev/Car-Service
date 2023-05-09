import React from "react";
import "../style/pages/home.css";

import LastItem from "../components/home/lastItem";
import MySchedule from "../components/home/mySchedule";
import SpecialDealArticle from "../components/home/SpecialDealArticle";
const Home = () => {
  return (
    <div className="home-section">
      <h2>Last Added</h2>
      <div className="last-added">
        <LastItem />
        <LastItem />
        <LastItem />
        <LastItem />
      </div>
      <h2>My Schedule</h2>
      <div className="schedule-container">
        <MySchedule />
        <MySchedule />
      </div>
      <h2>Special Deals</h2>
      <div className="special-deals-container">
        <SpecialDealArticle />
        <SpecialDealArticle />
        <SpecialDealArticle />
        <SpecialDealArticle />
        <SpecialDealArticle />
        <SpecialDealArticle />
      </div>
    </div>
  );
};

export default Home;
