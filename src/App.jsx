import Header from "./components/common/Header";
import OrderPanel from "./components/order/OrderPanel";
import POSPanel from "./components/pos/POSPanel";

export default function App() {
  return (
    <div class="container mx-auto px-4 h-screen flex flex-col">
      <Header />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <POSPanel />
        <OrderPanel />
      </div>
    </div>
  );
}
