import React from "react";

const User = ({ firstName, lastName, email, phone, address }) => {
  return (
    <tbody>
      <tr>
        <td className="item-cart-info">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            className="cart-img"
            alt="..."
          />
          <div className="item-cart-description">
            <h4>
              {firstName} {lastName}
            </h4>
            <p>{email}</p>
          </div>
        </td>

        <td>
          <div>{phone}</div>
        </td>

        <td className="item-price">{address} </td>
      </tr>
    </tbody>
  );
};

export default User;
