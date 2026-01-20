import { useEffect, useState } from "react";
import "./Wishlist.css";

export default function Wishlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setItems(saved);
  }, []);

  const removeItem = (id) => {
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (items.length === 0) {
    return <p style={{ padding: 40 }}>Your wishlist is empty ❤️</p>;
  }

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      <div className="wishlist-grid">
        {items.map((item) => (
          <div className="wishlist-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>Rs {item.price}</p>

            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
