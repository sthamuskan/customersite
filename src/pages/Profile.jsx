import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import "../pages/Profile.css";
import ProfilePic from "../assets/Profile.jpg";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    fetch("http://localhost:5000/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Save failed");
        return res.json();
      })
      .then(() => alert("Profile saved successfully ✔"))
      .catch(() => alert("Save failed ❌"));
  };

  return (
    <>
      <Header />

      <div className="profile-wrapper">
        <Breadcrumbs />

        {/* Header Card */}
        <div className="profile-header-card">
          <img src={ProfilePic} alt="Profile" className="profile-pic" />
          <div className="profile-text">
            <h2>{form.name || "Your Name"}</h2>
            <p>{form.email || "your@email.com"}</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="profile-form-card">
          <h3>Personal Information</h3>

          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>

          <div className="btn-wrap">
            <button type="button" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
