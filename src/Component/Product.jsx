import React from "react";
import products from "../produt.json";
import Card from "react-bootstrap/Card";
import ratingImg from "/src/assets/Star 1.png";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTrue, setTrue] = useState(false);
  let togglebtn = () => {
    if (isTrue) {
      setTrue(false);
    } else {
      setTrue(true);
    }
  };
  const fetchRequest = async () => {
    try {
      setIsLoading(true);
      const request = await fetch(products);
      console.log("True");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, [5000]);
  return (
    <>
      <main className="d-flex flex-wrap justify-content-between gap-4 pt-2">
        {isLoading && (
          <>
            {" "}
            <Spinner animation="grow" variant="dark" />{" "}
          </>
        )}
        {products.map((product) => {
          const { image, id, title, price, discountPrice, rating, rateCount } =
            product;
          return (
            <Card key={id} className="card-container">
              <Card.Img
                variant="top"
                src={image}
                className="card-img"
                alt="products"
              />
              <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <div className="d-flex gap-1">
                  <div>
                    <img src={ratingImg} alt="start" />
                    <img src={ratingImg} alt="start" />
                    <img src={ratingImg} alt="start" />
                    <img src={ratingImg} alt="start" />
                    <img src={ratingImg} alt="start" />
                  </div>
                  <div className="d-flex gap-1 pt-1">
                    <p>{rating}</p>
                    <p>({rateCount})</p>
                  </div>
                </div>
                <Card.Text className="d-flex gap-2 card-price">
                  <span className="fs-5 price-cart">#{price}</span>
                  <span className="text-decoration-line-through card-discount fs-5">
                    #{discountPrice}
                  </span>
                </Card.Text>
                <button className="w-100 add-to-cart-btn " onClick={togglebtn}>
                  {isTrue ? "Added to Cart" : "Add to Cart "}
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </main>
    </>
  );
};

export default Product;
