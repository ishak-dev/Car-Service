import React, { useEffect, useState } from "react";
import "../style/pages/shop.css";
import Article from "../components/shop/article";
import { allParts } from "../api/api";
import { all } from "axios";
const Shop = ({ user }) => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    allParts().then((data) => setArticleData(data));
  }, []);
  console.log(articleData);
  return (
    <div className="shop-section">
      {user == "admin" && (
        <div className="search-input">
          <input placeholder="Search for parts..." />
          <button className="search-btn">Search</button>
          <button className="search-btn">Add Article</button>
        </div>
      )}
      {articleData.map((item) => (
        <Article
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          img={item.photo_link}
        />
      ))}
    </div>
  );
};

export default Shop;
