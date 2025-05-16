import OrderForm from "./OrderForm";

export default function POSPanel({ total, onPlaceOrder }) {
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      <OrderForm total={total} onPlaceOrder={onPlaceOrder} />
    </div>
  );
}
