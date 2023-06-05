import React, { useState } from "react";
import ArticleModal from "./articleModal";
//style is used from Home specialDealArticle
const Article = ({ id, name, description, price, img }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  return (
    <div className="special-article-card list-card">
      <div className="special">
        <div className="img-container">
          <img
            src="https://live.staticflickr.com/65535/52157944359_68e75a2e2b_m.jpg"
            className="card-img-top"
            alt="..."
            onClick={handleShow}
          />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text get-dots">{description}</p>
        <div className="row">
          <div className="col-3">
            <p className="special-card-price">{price}$</p>
          </div>
        </div>
      </div>
      <ArticleModal
        handleClose={handleClose}
        show={show}
        name={name}
        description={description}
        price={price}
        id={id}
      />
    </div>
  );
};

export default Article;
