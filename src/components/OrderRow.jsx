export default function OrderRow({ order, onViewOrder }) {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.customer}</td>
      <td>{order.total}</td>

      <td>
        <button onClick={() => onViewOrder(order)}>
          View Details
        </button>
      </td>
    </tr>
  );
}