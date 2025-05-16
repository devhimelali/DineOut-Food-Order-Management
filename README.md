# 🍽️ Dine Out - Food Order Management

This is a **Dine Out** application built with **React** and **Tailwind CSS** using **Vite**. It allows users to **create**, **track**, and **manage** customer food orders efficiently. The app features a dynamic interface for adding food items to an order, **placing orders**, and **filtering** through existing orders based on their delivery status.

## 📸 Screenshot
!['Preview'](https://github.com/devhimelali/DineOut-Food-Order-Management/blob/main/preview.png?raw=true)

## Live Demo
[Click Here](https://dine-out-jade.vercel.app)

## 🚀 Features

### 🧾 Create Order Form
* Located on the left side of the screen.

* Fields include:

    * **Customer Name** (Text input)

    * **Food Item Selection** (with plus/minus actions)

### 🍕 Food Item Management

* A list of food items rendered with:

    * Food Name

    * Image/Icon

    * Price

* Each item has:

    * **➕ Plus Button:** Adds the item to the order and updates the total amount.

    * **➖ Minus Button:** Removes the item from the order and recalculates the total.

* Food items can be dynamically added or removed from the order.

### 💵 Total Price Calculation
* The **"Place Order"** button displays the real-time **Total Amount** based on selected items.

* Quantity and price are used to compute the total order value.

### 📋 Order Reports
* Located on the right side of the screen.

* Displays a list of submitted orders with:

    * Customer name

    * Number of items

    * Total price

    * Order status (`Pending` or `Delivered`)

    * Action buttons: ✅ Deliver and ❌ Delete

### 🔄 Order Actions
* **Deliver Order:**

    * Changes status from `Pending` to `Delivered`

    * Hides the `Deliver` button if the order is already Delivered.

    * Updates the **Order Summary**

* **Delete Order:**

    * Removes the order from the report list

    * Updates the **Order Summary** accordingly

### 🔍 Filter Orders
* Orders can be filtered by status:

    * `All`
    
    * `Pending`
    
    * `Delivered`

* Only orders matching the selected status are displayed in the report section.

### 📊 Order Summary
* Displays real-time summary of:

    * Total Orders

    * Pending Orders

    * Delivered Orders

* Updates immediately on placing, delivering, or deleting orders.

### 🛠️ Technologies Used
* **React**

* **Vite**

* **Tailwind CSS**

* **React Hooks (`useState`)**

