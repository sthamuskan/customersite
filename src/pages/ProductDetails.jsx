import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.css";

import silkSaree from "../assets/newari-silk-saree.webp";
import hakuPatasi from "../assets/hakupatasi.jpg";
import newariSaree from "../assets/newarisari.jpg";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* LOAD WISHLIST */
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const products = [
    {
      id: "1",
      title: "Newari Silk Saree",
      price: 3500,
      img: silkSaree,
      desc: "Premium traditional Newari silk saree.",
    },
    {
      id: "2",
      title: "Haku Patasi",
      price: 2800,
      img: hakuPatasi,
      desc: "Authentic Haku Patasi for cultural wear.",
    },
    {
      id: "3",
      title: "Newari Saree",
      price: 3000,
      img: newariSaree,
      desc: "Elegant Newari saree with modern touch.",
    },
  ];

  const product = products.find((p) => p.id === id);
  if (!product) return <p style={{ padding: 40 }}>Product not found</p>;

  const isWishlisted = wishlist.some((p) => p.id === product.id);

  const toggleWishlist = () => {
    setWishlist((prev) =>
      isWishlisted
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <div className="product-details">
      <img src={product.img} alt={product.title} />

      <div className="details-info">
        <h2>{product.title}</h2>
        <p className="price">Rs {product.price}</p>
        <p className="desc">{product.desc}</p>

        <div className="detail-actions">
          <button onClick={() => navigate("/checkout")}>
            Buy Now
          </button>

          <button
            className={`wish-btn ${isWishlisted ? "active" : ""}`}
            onClick={toggleWishlist}
          >
            {isWishlisted ? "❤️ Wishlisted" : "🤍 Add to Wishlist"}
          </button>
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    </div>
  );
}
