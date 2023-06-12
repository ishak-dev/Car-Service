import React, { useEffect, useState } from "react";
import AdminArticle from "../components/admin/adminArticles/article";
import { allParts } from "../api/api";
import AdminArticleModal from "../components/admin/adminArticles/adminArticleModal";
const AdminArticles = () => {
  const [articles, setArticles] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    allParts().then((data) => setArticles(data));
  }, []);
  return (
    <div className="cart-section">
      <h2>Articles</h2>
      <button
        style={{
          backgroundColor: "#ff3100",
          color: "white",
          padding: "5px 25px",
          borderRadius: "6px",
          border: "none",
        }}
        onClick={handleShow}
      >
        Add new Product
      </button>
      <div className="cart-item-container">
        <table className="cart-item-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Options</th>
            </tr>
          </thead>
          {articles &&
            articles.map((article) => (
              <AdminArticle
                id={article.id}
                img={article.photo_link}
                name={article.name}
                price={article.price}
                quantity={article.quantity}
              />
            ))}
        </table>
      </div>
      <AdminArticleModal handleClose={handleClose} show={show} />
    </div>
  );
};

export default AdminArticles;
