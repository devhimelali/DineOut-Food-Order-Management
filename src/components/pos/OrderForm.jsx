import { useState } from "react";
import ItemList from "./ItemList";
export default function OrderForm({ total, onPlaceOrder }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  function calculateTotalPrice() {
    return selectedItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      return total + price * quantity;
    }, 0);
  }

  function handleToggleItem(item) {
    const exists = selectedItems.find((i) => i.id === item.id);
    if (exists) {
      setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  }

  function handleNewOrder(e) {
    e.preventDefault();
    const newOrder = {
      id: total() + 1,
      name: customerName,
      quantity: selectedItems.length,
      totalAmount: calculateTotalPrice(),
      status: "pending",
      isDelivered: false,
    };
    onPlaceOrder(newOrder);
    setSelectedItems([]);
    setCustomerName("");
  }
  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          type="text"
          name="name"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      <ItemList selectedItems={selectedItems} onToggleItem={handleToggleItem} />
      <button
        onClick={(e) => {
          handleNewOrder(e);
        }}
        className="cursor-pointer w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {calculateTotalPrice()})
      </button>
    </form>
  );
}
