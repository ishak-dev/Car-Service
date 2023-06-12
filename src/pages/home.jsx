import React, { useEffect, useState } from "react";
import "../style/pages/home.css";

import LastItem from "../components/home/lastItem";
import MySchedule from "../components/home/mySchedule";
import SpecialDealArticle from "../components/home/SpecialDealArticle";
import { allParts, allUserServices } from "../api/api";
import Article from "../components/shop/article";
const Home = () => {
  const [articleData, setArticleData] = useState([]);
  const [lastAddedItems, setLastAddedItems] = useState([]);
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    allParts().then((data) => setArticleData(data));
    allUserServices().then((data) => setSchedules(data));
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
        {schedules != [] &&
          schedules.map((schedule) => (
            <MySchedule
              date={schedule.ServiceDate}
              hours={schedule.hours}
              description={schedule.description}
            />
          ))}
      </div>
      <h2>Last in stock</h2>
      <div className="special-deals-container">
        {articleData.map(
          (article) =>
            article.quantity < 4 && (
              <Article
                id={article.id}
                name={article.name}
                description={article.description}
                price={article.price}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
