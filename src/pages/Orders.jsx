import React from "react"
import TopBar from "../components/generic/TopBar"
import { orders } from "../utils/constants"
import Order from "../components/orders/Order"

const Orders = () => {
  return (
    <div>
      <TopBar content={"My Orders"} />
      <div className="mx-5 mt-20 text-lg">
        <h1 className="rubik font-bold">Past Orders</h1>
      </div>

      {orders.map((v, index) => (
        <Order key={index} item={v} />
      ))}
    </div>
  )
}

export default Orders
