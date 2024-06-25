"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductsComponent({ onNext }) {
  const delivery = 49;
  const[totalprice, settotalprice] = useState(0)
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  const [products, setProducts] = useState([]);

  const totalPrice = products.reduce(
    (total, item) => total + item.price,
    0
  );
  console.log("sjdjdssaassassasdss", products)
  console.log("sjqddffwf", totalPrice)

  useEffect(() => {
    async function fetchProducts() {
      try {
        let id =null;
        const userString = localStorage.getItem("user");
        

        if (userString) {
          const user = JSON.parse(userString);

           id = user._id;

          console.log("User _id:", id);
        } else {
          console.log("No user found in local storage.");
        }

        
        const response = await axios.get(
          `http://localhost:3000/api/get-cart?id=${id}`
        );
        setProducts(response.data.cart.items);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    console.log(products);
    fetchProducts();
  }, []);

  return (
    
    <div style={{ padding: "10px" }}>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div
        className="row"
        style={{
          borderRadius: "20px",
          padding: "30px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="col-8" style={{ padding: "5px 30px" }}>
          {products.map((product, index) => (
            <div
              key={index}
              className="row"
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "white",
                border: "1px solid #eaeaeb",
                marginTop: "15px",
              }}
            >
              <div className="col">
                <img
                  style={{ borderRadius: "20px 50px" }}
                  src={
                    `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${product.imageId}` ||
                    "default_image_url_here"
                  }
                  alt={product.name}
                  width="150"
                  height="150"
                />
              </div>
              <div
                className="col"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>₹{product.price/100}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="col-4"
          style={{
            padding: "30px",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px solid #e2e3f2",
          }}
        >
          <h2>Bill Details</h2>
          <h3>Item Total: {totalPrice/100}</h3>
          <h5>Delivery Fees: {delivery}</h5>
          <h5>GST Details: {(totalPrice*18/100)/100}</h5>
          <h4>Total Payable Amount: {(totalPrice/100)+delivery+((totalPrice*18/100)/100)}</h4>

      
          <hr />
          {/* <h3>Total to Pay:{delivery+29}</h3> */}
          <button type="button" class="btn btn-warning" onClick={onNext}>Confirm Order</button>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
