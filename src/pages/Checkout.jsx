import React, { useState } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import "./Checkout.css";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "",
    paymentProof: null, // added to store screenshot file
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // TEMP products (replace later with cart)
  const products = [
    { name: "Red Saree Silk Malai", price: 1200, quantity: 1 },
    { name: "Golden Dupatta", price: 800, quantity: 1 },
    { name: "Jewellery Set", price: 500, quantity: 1 },
  ];

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 150;
  const total = subtotal + shipping;

  // ---------------- VALIDATION ----------------
  const validate = () => {
    const temp = {};

    if (!form.name.trim()) temp.name = "Full name is required";
    if (!form.address.trim()) temp.address = "Address is required";
    if (!/^[0-9+ ]{8,15}$/.test(form.phone))
      temp.phone = "Enter a valid phone number";
    if (!form.payment) temp.payment = "Select payment method";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---------------- PLACE ORDER ----------------
  const placeOrder = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("fullName", form.name);
      formData.append("address", form.address);
      formData.append("phone", form.phone);
      formData.append("paymentMethod", form.payment);
      formData.append("subtotal", subtotal);
      formData.append("shipping", shipping);
      formData.append("total", total);
      formData.append("items", JSON.stringify(products));

      if (form.paymentProof) {
        formData.append("paymentProof", form.paymentProof);
      }

      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Order failed");

      alert("🎉 Order placed successfully!");
      console.log("Order saved:", data);

      // reset form
      setForm({
        name: "",
        address: "",
        phone: "",
        payment: "",
        paymentProof: null,
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Breadcrumbs />

        <div className="page-top">
          <h2>Checkout</h2>
        </div>

        <div className="page-grid">
          {/* LEFT — SHIPPING FORM */}
          <div className="page-card">
            <h4>Shipping Details</h4>

            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="field">
              <label>Delivery Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>

            <div className="field">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <h4>Payment Method</h4>

            <div className="payment-options">
              <label
                className={`payment-chip ${
                  form.payment === "cod" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>

              <label
                className={`payment-chip ${
                  form.payment === "online" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={form.payment === "online"}
                  onChange={handleChange}
                />
                Online Payment
              </label>
            </div>

            {/* ONLINE PAYMENT QR + UPLOAD */}
            {form.payment === "online" && (
              <div className="online-payment">
                <p>Scan the QR below to pay via eSewa/Khalti:</p>
                <img
                  src="http://localhost:5000/uploads/sample-qr.png"
                  alt="Pay QR"
                  style={{ width: "200px" }}
                />

                <label>Upload Payment Screenshot:</label>
                <input
                  type="file"
                  onChange={(e) =>
                    setForm({ ...form, paymentProof: e.target.files[0] })
                  }
                />
              </div>
            )}

            {errors.payment && <p className="error">{errors.payment}</p>}
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="page-card">
            <h4>Order Summary</h4>

            {products.map((item, index) => (
              <div className="summary-row" key={index}>
                <span>{item.name}</span>
                <b>Rs {item.price}</b>
              </div>
            ))}

            <hr />

            <div className="summary-row">
              <span>Subtotal</span>
              <b>Rs {subtotal}</b>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <b>Rs {shipping}</b>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <b>Rs {total}</b>
            </div>

            <button
              className="primary-btn"
              onClick={placeOrder}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Confirm & Place Order"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
