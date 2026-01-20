import React, { useState } from "react";
import "../pages/CheckoutBold.css";

const CheckoutBold = () => {
  const [payment, setPayment] = useState("");

  const products = [
    { name: "Designer Saree (Red Silk)", price: 1500 },
    { name: "Pearl Necklace", price: 900 }
  ];

  const subtotal = products.reduce((t, p) => t + p.price, 0);
  const shipping = 150;
  const total = subtotal + shipping;

  return (
    <div className="bold-wrapper">

      <h2 className="title">Checkout</h2>

      <div className="bold-grid">

        {/* LEFT */}
        <div className="bold-card">
          <h3>Shipping Details</h3>

          <input placeholder="Full Name" />
          <input placeholder="Phone Number" />
          <textarea placeholder="Delivery Address" />

          <h3>Payment Method</h3>

          <div className="bold-pay">
            <div
              className={`pay-box ${payment==="cod"?"active":""}`}
              onClick={() => setPayment("cod")}
            >
              Cash on Delivery
            </div>

            <div
              className={`pay-box ${payment==="online"?"active":""}`}
              onClick={() => setPayment("online")}
            >
              Online Payment
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bold-card summary">

          <h3>Order Summary</h3>

          {products.map((p,i)=>(
            <div className="row" key={i}>
              <span>{p.name}</span>
              <b>Rs {p.price}</b>
            </div>
          ))}

          <hr/>

          <div className="row">
            <span>Subtotal</span>
            <b>Rs {subtotal}</b>
          </div>

          <div className="row">
            <span>Shipping</span>
            <b>Rs {shipping}</b>
          </div>

          <div className="row total-line">
            <span>Total</span>
            <b className="total-amt">Rs {total}</b>
          </div>

          <button className="bold-btn">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBold;
