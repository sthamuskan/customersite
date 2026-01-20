/* -------------------------
   ORDERS TAB (UI TABLE)
-------------------------- */
const OrdersTab = () => {
  const orders = [
    {
      id: "#2453",
      product: "Red Saree Silk Malai",
      img: require("../assets/Profile.jpg"),
      date: "Dec 12, 12:56 PM",
      price: "Rs1500",
      status: "SHIPPED"
    },
    {
      id: "#2452",
      product: "Bridal Lehenga Set",
      img: require("../assets/Profile.jpg"),
      date: "Dec 9, 2:28 PM",
      price: "Rs1564",
      status: "READY TO PICKUP"
    },
    {
      id: "#2451",
      product: "Handmade Kurti",
      img: require("../assets/Profile.jpg"),
      date: "Dec 4, 12:56 PM",
      price: "$375",
      status: "PARTIALLY FULFILLED"
    },
    {
      id: "#2450",
      product: "Classic Dupatta",
      img: require("../assets/Profile.jpg"),
      date: "Dec 1, 4:07 AM",
      price: "$657",
      status: "CANCELLED"
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "SHIPPED": return "badge shipped";
      case "READY TO PICKUP": return "badge pickup";
      case "PARTIALLY FULFILLED": return "badge partial";
      case "CANCELLED": return "badge cancelled";
      default: return "badge";
    }
  };

  return (
    <div>
      <h3>My Orders</h3>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Product</th>
            <th>Status</th>
            <th>Date</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>

              <td className="product-cell">
                <img src={order.img} alt="" className="order-thumb" />
                {order.product}
              </td>

              <td>
                <span className={getStatusClass(order.status)}>
                  {order.status}
                </span>
              </td>

              <td>{order.date}</td>
              <td>{order.price}</td>

              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
