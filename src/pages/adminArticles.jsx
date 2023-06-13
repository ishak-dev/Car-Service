import React, { useEffect, useState } from "react";
import AdminArticle from "../components/admin/adminArticles/article";
import { allParts } from "../api/api";
import AdminArticleModal from "../components/admin/adminArticles/adminArticleModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdminArticles = () => {
  const [articles, setArticles] = useState("");
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (counter > 0) toast.success("Successfull");
    allParts().then((data) => setArticles(data));
  }, [counter]);
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
                description={article.description}
                setCounter={setCounter}
              />
            ))}
        </table>
      </div>
      <AdminArticleModal
        handleClose={handleClose}
        show={show}
        setCounter={setCounter}
      />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};

export default AdminArticles;
