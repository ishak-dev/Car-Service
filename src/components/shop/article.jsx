import React from "react";
//style is used from Home specialDealArticle
const Article = () => {
  return (
    <div className="special-article-card list-card">
      <div className="special">
        <div className="img-container">
          <img
            src="https://live.staticflickr.com/65535/52157944359_68e75a2e2b_m.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Disks</h5>
        <p className="card-text get-dots">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
          nulla arcu. Nunc sapien risus, aliquam nec molestie id, tincidunt nec
          orci. Aliquam ut semper quam, ac ultrices erat. Nam semper nisi
          sapien, sit amet luctus tellus rutrum molestie. Morbi rhoncus
          efficitur quam, quis dapibus tellus mollis sed. Fusce porttitor magna
          sit amet pharetra lacinia. Aenean vitae laoreet mauris, id venenatis
          lectus.
        </p>
        <div className="row">
          <div className="col-3">
            <p className="special-card-price">200$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
