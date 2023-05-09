import React from "react";
import "../style/pages/shop.css";
import Article from "../components/shop/article";

const Shop = ({ user }) => {
  return (
    <div className="shop-section">
      {user == "admin" && (
        <div className="search-input">
          <input placeholder="Search for parts..." />
          <button className="search-btn">Search</button>
          <button className="search-btn">Add Article</button>
        </div>
      )}
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default Shop;
