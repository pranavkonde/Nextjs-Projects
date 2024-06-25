"use client"

import "./styles.css";
import {Restaurant} from '../../data/restaurantData'

export default function MenuCard() {
    const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
    return (
        <>
          {Restaurant.map((restaurantItem) => (
            <div key={restaurantItem.id} style={{ padding: "5px", gap: "20px" }}>
              <div className="card custom-card" style={{ border: "none", marginRight: "5px" }}>
                <div className="card-body">
                  <h6>{restaurantItem.name}</h6>
                  <p>{restaurantItem.description}</p>
                  {restaurantItem.menu.map((menuItem) => (
                    <div key={menuItem.id}>
                      <h6>{menuItem.name}</h6>
                      <img src={IMG_URL + menuItem.imageId} />
                      <p>{menuItem.description}</p>
                      <p>Price: ₹{menuItem.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      );
      
};

