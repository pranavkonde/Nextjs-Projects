import React, { useState, useEffect } from "react";
import axios from 'axios'; 

import "bootstrap/dist/css/bootstrap.min.css";

function AddressForm({ onNext }) {
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    phoneno: ""
  });

    let id = null;
    const userString = localStorage.getItem("user");

    if (userString) {
      const user = JSON.parse(userString);
      id = user._id;
      console.log("User _id:", id);
    } else {
      console.log("No user found in local storage.");
    }

    

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
        userId: id 
      };
    try {
      await axios.post('http://localhost:3000/api/users/addressForm', updatedFormData);
      console.log("Data submitted successfully");
      onNext(); 
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Address Details</h1>
      <form
        onSubmit={handleSubmit}
        className="w-100 rounded-1 p-4 border bg-white"
        style={{ padding: "70px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <div className="container" style={{ height: "300px", width: "400px" }}>
          <div className="row justify-content-center">
            <div className="row">
              <div className="col">
                <label className="d-block mb-4">
                  <span className="form-label d-block">Full Name</span>
                  <input
                    name="fullname"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">Address</span>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">Phone no.</span>
                  <input
                    name="phoneno"
                    type="text"
                    className="form-control"
                    placeholder="Enter your phone no."
                    value={formData.phoneno}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <button className="btn btn-outline-info" type="submit">Next</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddressForm;
