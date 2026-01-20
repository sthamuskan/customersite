import "./Products.css";

export default function Products() {
  const sections = [
    {
      title: "Ethnic Wear",
      products: [
        { name: "Newari Set", price: "Rs 4500", img: "/src/assets/hakupatasi.jpg" },
        { name: "Tamang", price: "Rs 5200", img: "/src/assets/newari-silk-saree.webp" },
        { name: "Magar", price: "Rs 4900", img: "/src/assets/brown maheshwari silk.webp" },
        { name: "Chhetri", price: "Rs 4200", img: "/src/assets/newarisari.jpg" },
      ],
    },
    {
      title: "Saree",
      products: [
        { name: "Olive Green", price: "Rs 2800", img: "/src/assets/newarisari.jpg" },
        { name: "Big border", price: "Rs 3500", img: "/src/assets/brown maheshwari silk.webp" },
        { name: "Maheshwari", price: "Rs 3000", img: "/src/assets/newari-silk-saree.webp" },
        { name: "Red cotton", price: "Rs 2500", img: "/src/assets/hakupatasi.jpg" },
      ],
    },
    {
      title: "Kurti",
      products: [
        { name: "Yellow cotton", price: "Rs 1800", img: "/src/assets/newarisari.jpg" },
        { name: "Maroon kurti", price: "Rs 2000", img: "/src/assets/hakupatasi.jpg" },
        { name: "Cotton salwar", price: "Rs 2300", img: "/src/assets/newari-silk-saree.webp" },
        { name: "Orange kurti", price: "Rs 2100", img: "/src/assets/brown maheshwari silk.webp" },
      ],
    },
  ];

  return (
    <div className="products-page">
      {sections.map((section, i) => (
        <div key={i} className="category-section">
          <div className="category-title">{section.title}</div>

          <div className="product-row">
            {section.products.map((item, index) => (
              <div className="product-card" key={index}>
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p className="price">{item.price}</p>

                <div className="card-actions">
                  <button className="buy-btn">Buy Now</button>
                  <span className="see-more">See More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
