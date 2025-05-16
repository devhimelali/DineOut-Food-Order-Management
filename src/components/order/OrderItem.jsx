export default function OrderItem({ order, onDeliveryOrder, onDeleteOrder }) {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{order.id}</td>
      <td className="py-3">{order.name}</td>
      <td className="py-3">{order.quantity}</td>
      <td className="py-3">{order.totalAmount}</td>
      <td className="py-3">
        {order.status === "pending" ? (
          <span className="text-red-500">PENDING</span>
        ) : (
          <span className="text-green-500">DELIVERED</span>
        )}
      </td>
      <td className="py-3">
        <button
          onClick={() => onDeleteOrder(order.id)}
          className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300 cursor-pointer"
        >
          Delete
        </button>
        {order.isDelivered ? (
          ""
        ) : (
          <button
            onClick={() => onDeliveryOrder(order.id)}
            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer"
          >
            DELIVER
          </button>
        )}
      </td>
    </tr>
  );
}
