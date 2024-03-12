import React, { useState } from "react"
import { TbBellRinging } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import TopBar from "../components/generic/TopBar"
import OrderTotal from "../components/orders/OrderTotal"
import ChangeStatus from "../components/orders/ChangeStatus"

const OrderDetail = () => {
  const navigate = useNavigate()
  const [statusModal, setStatusModal] = useState(false)

  return (
    <div className="flex flex-col">
      <TopBar content={"My Orders"} />
      <div className="mx-5 mt-20 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Order ID : #7823H </h1>
          <h1
            className="cursor-pointer text-sm text-primary hover:underline"
            onClick={() => {
              navigate("/dashboard")
            }}>
            Texas Grill House
          </h1>
          <h1 className="text-sm text-[#A3A3A3]">Date: 2/13/2024 - 13:33</h1>
        </div>

        <div className="flex flex-col">
          <button
            onClick={() => setStatusModal(true)}
            className="flex items-center justify-center gap-1 rounded bg-primary p-3 text-button">
            <span>Change Status</span>
          </button>
        </div>
      </div>
      <OrderTotal />
      {statusModal && <ChangeStatus close={() => setStatusModal(false)} />}
    </div>
  )
}
export default OrderDetail
