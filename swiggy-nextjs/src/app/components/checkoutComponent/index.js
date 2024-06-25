import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation"; 

function Payment() {
  const router = useRouter();
  const { price } = 200; 
  const [product, setProduct] = useState({
    name: "Swiggy",
    price: price,
    productOwner: "KnowledgeHut",
    description: "Make the Payment to Complete the Order",
    quantity: 1,
  });

  function orderplaced(){
    alert("Order Placed Successfully")
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
      <div style={{ border: '1px solid gray', padding: '10px', textAlign: "center", width: "30rem" }}>
        <h1>Checkout</h1>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <button type="button" class="btn btn-warning" onClick={orderplaced}>Pay {product.price}</button>
      </div>
    </div>
  );
}

export default Payment;
