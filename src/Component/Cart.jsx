import React from "react";
import carts from "../produt.json";
import minus from "/src/assets/-.png";
import plus from "/src/assets/+.png";
const Cart = () => {
  return (
    <>
      <main className="container">
        <div className="border border-3 rounded p-3  d-flex row gap-4 ">
          <h1 className="cart-h1">My Cart Preview</h1>
          {carts.map((cart) => {
            const { image, id, title, price } = cart;
            return (
              <div
                key={id}
                className="d-flex col gap-4 container align-items-center"
              >
                <img src={image} alt="cart-img" className="cart-img col" />
                <div className="cart-d row">
                  <p className="title-cart col">{title}</p>
                  <p className="d-flex align-items-center">
                    <button className="minus me-1">
                      <img src={minus} className="mb-2"/>
                    </button>
                    1
                    <button className="plus ms-1" >
                      <img src={plus} className="mb-2"/>
                    </button>
                  </p>
                  <div className="d-flex justify-content-between align-items-center col">
                    <p>{price}</p>
                    <button className="remove mb-3">Remove</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <div className="d-flex justify-content-between">
              <p className="price-title">Sub Total </p>
              <p className="price">18,000</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="price-title">Delivery</p>
              <p className="price">8,000</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="price-title">Total</p>
              <p className="price">36,000</p>
            </div>
            <button className="w-100 order">Confirm Order</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
