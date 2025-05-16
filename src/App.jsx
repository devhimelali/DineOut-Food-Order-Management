import { useState } from "react";
import Header from "./components/common/Header";
import OrderPanel from "./components/order/OrderPanel";
import POSPanel from "./components/pos/POSPanel";

export default function App() {
  const orderItem = {
    id: 1,
    name: "Sumit Saha",
    quantity: 5,
    totalAmount: 100,
    status: "pending",
    isDelivered: false,
  };
  const [allOrders, setAllOrders] = useState([orderItem]);
  const [orderLists, setOrderLists] = useState([orderItem]);
  function handleFilterOrder(status) {
    if (status === "all") {
      setOrderLists(allOrders);
    } else {
      setOrderLists(
        allOrders.filter(
          (order) => order.status.toLowerCase() === status.toLowerCase()
        )
      );
    }
  }

  function handleDeliveryOrder(id) {
    const updateOrderStatus = (orders) => {
      const index = orders.findIndex((order) => order.id === id);
      if (index === -1) return orders;

      const updated = [...orders];
      updated[index] = {
        ...updated[index],
        status: "delivered",
        isDelivered: true,
      };
      return updated;
    };

    setAllOrders((prev) => updateOrderStatus(prev));
    setOrderLists((prev) => updateOrderStatus(prev));
  }

  function handleDeleteOrder(id) {
    const updated = allOrders.filter((order) => order.id !== id);
    setAllOrders(updated);
    setOrderLists(updated);
  }

  function totalOrder() {
    return allOrders.length;
  }

  function totalPendingOrder() {
    return allOrders.filter((order) => order.status === "pending").length;
  }

  function totalDeliveredOrder() {
    return allOrders.filter((order) => order.status === "delivered").length;
  }

  function handlePlaceOrder(order) {
    if(order.name === "") return alert("Please enter name")
    if(order.quantity === 0) return alert("Please enter quantity")
    if(order.totalAmount === 0) return alert("Please enter price")
    setAllOrders((prev) => [...prev, order]);
    setOrderLists((prev) => [...prev, order]);
  }

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <POSPanel total={totalOrder} onPlaceOrder={handlePlaceOrder} />
        <OrderPanel
          totalOrder={totalOrder}
          totalPendingOrder={totalPendingOrder}
          totalDeliveredOrder={totalDeliveredOrder}
          orderLists={orderLists}
          onDeliveryOrder={handleDeliveryOrder}
          onDeleteOrder={handleDeleteOrder}
          onFilterOrder={handleFilterOrder}
        />
      </div>
    </div>
  );
}
