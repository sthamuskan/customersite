import "./Stores.css";

import haku from "../assets/hakupatasi.jpg";
import newari from "../assets/newarisari.jpg";
import silk from "../assets/newari-silk-saree.webp";

export default function Stores() {
  const stores = [
    {
      id: 1,
      name: "Haku Patasi",
      img: haku,
    },
    {
      id: 2,
      name: "Newari Saree",
      img: newari,
    },
    {
      id: 3,
      name: "Newari Silk Saree",
      img: silk,
    },
  ];

  return (
    <div className="stores-page">
      <h2>Our Stores</h2>

      <div className="store-grid">
        {stores.map((store) => (
          <div className="store-card" key={store.id}>
            <img src={store.img} alt={store.name} />
            <h4>{store.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
