import foodItems from "../../data/food";
import Item from "./Item";
export default function ItemList({ selectedItems, onToggleItem }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        {foodItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            isSelected={selectedItems.some(
              (selected) => selected.id === item.id
            )}
          />
        ))}
      </div>
    </div>
  );
}
