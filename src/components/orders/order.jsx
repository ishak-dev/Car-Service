import React, { useEffect, useState } from "react";
import "../../style/components/orders/order.css";
import Article from "../shop/article";
import { getPartById } from "../../api/api";
const Order = ({ data }) => {
  const user = localStorage.getItem("admin");
  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    if (data.part_id != undefined)
      getPartById(data.part_id).then((data) => setArticleData(data));
  }, [data]);

  return (
    <details className="order-container">
      <summary>
        {data.order_date} <span>Total Price: 300 $</span>
        {user == "admin" ? (
          <button className="confirm-cart-btn remove-float">
            Confirm order
          </button>
        ) : (
          ""
        )}
      </summary>
      {articleData.length > 1 ? (
        articleData.map((item) => (
          <Article
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            img={item.photo_link}
          />
        ))
      ) : (
        <Article
          key={articleData.id}
          name={articleData.name}
          description={articleData.description}
          price={articleData.price}
          img={articleData.photo_link}
        />
      )}
    </details>
  );
};

export default Order;
