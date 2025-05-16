import OrderList from "./OrderList";
import OrderSummary from "./OrderSummary";

export default function OrderPanel({
  totalOrder,
  totalPendingOrder,
  totalDeliveredOrder,
  orderLists,
  onDeliveryOrder,
  onDeleteOrder,
  onFilterOrder,
}) {
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderSummary
        totalOrder={totalOrder}
        totalPendingOrder={totalPendingOrder}
        totalDeliveredOrder={totalDeliveredOrder}
      />
      <OrderList
        orderLists={orderLists}
        onDeliveryOrder={onDeliveryOrder}
        onDeleteOrder={onDeleteOrder}
        onFilterOrder={onFilterOrder}
      />
    </div>
  );
}
