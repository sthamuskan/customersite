import "./Orders.css";

export default function Orders() {
  const orders = [
    { id: "#1001", date: "10 Jan 2026", total: 3500, status: "Delivered" },
    { id: "#1002", date: "18 Jan 2026", total: 2800, status: "Processing" },
  ];

  return (
    <div className="orders-page">
      <h2>My Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.date}</td>
              <td>Rs {o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
