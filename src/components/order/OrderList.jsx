import FilterIcon from "../icons/FilterIcon";
import OrderItem from "./OrderItem";

export default function OrderList({
  orderLists,
  onDeliveryOrder,
  onDeleteOrder,
  onFilterOrder,
}) {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <FilterIcon />
          <select
            onChange={(e) => onFilterOrder(e.target.value)}
            className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orderLists.map((order) => (
                <OrderItem
                  order={order}
                  onDeliveryOrder={onDeliveryOrder}
                  onDeleteOrder={onDeleteOrder}
                  key={order.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
