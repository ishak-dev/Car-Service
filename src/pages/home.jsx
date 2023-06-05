import React, { useEffect, useState } from "react";
import "../style/pages/home.css";

import LastItem from "../components/home/lastItem";
import MySchedule from "../components/home/mySchedule";
import SpecialDealArticle from "../components/home/SpecialDealArticle";
import { allParts } from "../api/api";
const Home = () => {
  const [articleData, setArticleData] = useState([]);
  const [lastAddedItems, setLastAddedItems] = useState([]);
  useEffect(() => {
    allParts().then((data) => setArticleData(data));
  }, []);

  useEffect(() => {
    const dataArray = [];
    if (articleData.length != 0) {
      for (let i = articleData.length - 1; i > articleData.length - 4; i--) {
        dataArray.push(articleData[i]);
      }
      setLastAddedItems(dataArray);
    }
  }, [articleData]);

  return (
    <div className="home-section">
      <h2>Last Added</h2>
      <div className="last-added">
        {lastAddedItems.map((item) => (
          <LastItem name={item.name} price={item.price} />
        ))}
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
