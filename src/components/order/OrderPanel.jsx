import OrderList from "./OrderList";
import OrderSummary from "./OrderSummary";

export default function OrderPanel() {
  return (
    <div class="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderSummary />
      <OrderList />
    </div>
  );
}
