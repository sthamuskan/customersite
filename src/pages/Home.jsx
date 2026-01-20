import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

import ethnic1 from "../assets/newari-silk-saree.webp";
import ethnic2 from "../assets/hakupatasi.jpg";
import ethnic3 from "../assets/newarisari.jpg";
import kurti1 from "../assets/brown maheshwari silk.webp";

export default function Home() {
  const navigate = useNavigate();

  /* LOAD WISHLIST FROM LOCAL STORAGE */
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  /* SAVE TO LOCAL STORAGE */
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const products = [
    {
      id: 1,
      title: "Newari Silk Saree",
      price: 3500,
      image: ethnic1,
      category: "Ethnic Wear",
    },
    {
      id: 2,
      title: "Haku Patasi",
      price: 2800,
      image: ethnic2,
      category: "Ethnic Wear",
    },
    {
      id: 3,
      title: "Newari Saree",
      price: 3000,
      image: ethnic3,
      category: "Ethnic Wear",
    },
    {
      id: 4,
      title: "Maheshwari Kurti",
      price: 2500,
      image: kurti1,
      category: "Kurti",
    },
  ];

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <div className="home-page">
      <Section
        title="Ethnic Wear"
        products={products.slice(0, 3)}
        navigate={navigate}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />

      <Section
        title="Kurti"
        products={products.slice(3)}
        navigate={navigate}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </div>
  );
}

/* SECTION COMPONENT */
function Section({ title, products, navigate, wishlist, toggleWishlist }) {
  return (
    <>
      <h3 className="section-title">{title}</h3>

      <div className="product-grid">
        {products.map((item) => {
          const isWishlisted = wishlist.some((p) => p.id === item.id);

          return (
            <div className="product-card" key={item.id}>
              {/* CARD CLICK */}
              <div
                className="card-click"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>Rs {item.price}</p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="card-actions">
                <button
                  className="buy-btn"
                  onClick={() => navigate("/checkout")}
                >
                  Buy Now
                </button>

                <Link to={`/product/${item.id}`} className="see-btn">
                  See More
                </Link>

                <button
                  className={`wish-btn ${isWishlisted ? "active" : ""}`}
                  onClick={() => toggleWishlist(item)}
                >
                  {isWishlisted ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
