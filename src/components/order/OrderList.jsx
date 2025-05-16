import FilterIcon from "../icons/FilterIcon";
import OrderItem from "./OrderItem";

export default function OrderList() {
  return (
    <div>
      <div class="flex justify-between">
        <h2 class="text-xl font-bold mb-4">Order Reports</h2>

        <div class="flex gap-4 items-center">
          <FilterIcon />
          <select class="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      <div class="bg-cardbg rounded-lg p-4">
        <div class="reports-container">
          <table class="min-w-full">
            <thead>
              <tr class="text-left text-sm">
                <th class="pb-3 font-medium">ID</th>
                <th class="pb-3 font-medium">Customer Name</th>
                <th class="pb-3 font-medium">Items</th>
                <th class="pb-3 font-medium">Amount</th>
                <th class="pb-3 font-medium">Status</th>
                <th class="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <OrderItem />

              {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">Akash Ahmed</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-green-500">DELIVERED</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
