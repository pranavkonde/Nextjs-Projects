"use client";

import "./styles.css";
import { useSearchParams } from "next/navigation";
import { Restaurant } from "../../data/restaurantData";
import Card from "react-bootstrap/Card";
import { useState , useEffect} from "react";
import { Corinthia } from "next/font/google";
import Navbar from "@/app/components/navbar";
import axios from 'axios';
import { restaurant } from "@/app/data/topRestaurant";

export default function myMenu() {
  // const[User,setUser] =useState('');
  const [userId, setUserId] = useState(null);
  const [counts, setCounts] = useState({});
  // const [userId, setUserId] = useState(null); 
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const MENU_IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  const RESTAURANT_IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const filteredRestaurant = Restaurant.find(
    (restaurant) => restaurant.id === id
  );


// const userObject = localStorage.getItem("user");
// var userId = null;
// if (userObject) {
//   const parsedUser = JSON.parse(userObject);
//   // setUserId(parsedUser._id); 
//   userId = parsedUser._id;
//   // setUser(userId);
//   console.log(counts,userId)
  
// }
useEffect(() => {
  const userObject = localStorage.getItem("user");
  if (userObject) {
    const parsedUser = JSON.parse(userObject);
    setUserId(parsedUser._id);
  }
}, []);
// const addToCart = (menuItem) => {


  // console.log("Details", postData);
  // axios.post("http://localhost:3000/cart/addToCart", postData)
  //  .then(response => {
  //     console.log(response);
  //   })
  //  .catch(error => {
  //     console.error('Error adding item to cart:', error);
  //   });


  const addToCart = (menuItem) => {
    const postData = {
      userId: userId,
          restaurantId: filteredRestaurant.id,
          menuItem: menuItem 
    };
  console.log("jahahhahaha", postData)
    axios
      .post(
        "http://localhost:3000/api/cart",
        { userId: userId,
          restaurantId: filteredRestaurant.id,
          menuItem: menuItem },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// };



  return (
    <>
      <Navbar />
      {filteredRestaurant && (
        <div key={filteredRestaurant.id}>
          <div
            className="card custom-card"
            style={{ border: "none", marginRight: "5px" }}
          >
            <div
              className="card-body"
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h6
                style={{
                  fontSize: "24px",
                  fontamily: "Gilroy",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: "20px",
                  fontSize: "30px",
                }}
              >
                {filteredRestaurant.name}
              </h6>
              <div className="restaurant-container">
                <div className="rest-details">
                  <p style={{ display: "flex" }}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      role="img"
                      aria-hidden="true"
                      strokeColor="rgba(2, 6, 12, 0.92)"
                      fillColor="rgba(2, 6, 12, 0.92)"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                      ></circle>
                      <path
                        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                        fill="white"
                      ></path>
                      <defs>
                        <linearGradient
                          id="StoreRating20_svg__paint0_linear_32982_71567"
                          x1="10"
                          y1="1"
                          x2="10"
                          y2="19"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#21973B"></stop>
                          <stop offset="1" stop-color="#128540"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    {filteredRestaurant.avgRating} (
                    {filteredRestaurant.totalRatingsString} ratings) •{" "}
                    {filteredRestaurant.costForTwo}{" "}
                  </p>
                  <br></br>
                  <p>{filteredRestaurant.cuisines.join(", ")}</p>
                  <br />
                  <p style={{ textAlign: "left" }}>
                    {filteredRestaurant.locality}, {filteredRestaurant.areaName}
                  </p>
                </div>
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={
                    RESTAURANT_IMG_URL + filteredRestaurant.cloudinaryImageId
                  }
                  alt={filteredRestaurant.name}
                />
              </div>
              <br />
              <br />

              {filteredRestaurant.menu.map((menuItem) => (
                <div key={menuItem.id} className="menu-card">
                  <div className="item-details">
                    <b>
                      <h6>{menuItem.name}</h6>
                    </b>
                    <p>{menuItem.description}</p>
                    <p>Price: ₹{menuItem.price / 100}</p>
                  </div>
                  <div className="image-button">
                    <img
                      src={MENU_IMG_URL + menuItem.imageId}
                      alt={menuItem.name}
                    />
                    <div className="add-button">
                      <button
                        onClick={() => {
                          setCounts((prevCounts) => ({
                            ...prevCounts,
                            [menuItem.id]: (prevCounts[menuItem.id] || 0) - 1,
                          }));
                        }}
                        disabled={counts[menuItem.id] <= 0}
                      >
                        -
                      </button>
                      <span>{counts[menuItem.id] || 0}</span>
                      <button
                        onClick={() => {
                          setCounts((prevCounts) => ({
                            ...prevCounts,
                            [menuItem.id]: (prevCounts[menuItem.id] || 0) + 1,
                          }));
                        }}
                      >
                        +
                      </button><div></div>
                      
                    </div>
                    <button
                        onClick={() => {
                          addToCart(menuItem);
                        }}
                      >
                        Add to Cart
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
