import React from "react"
import { useNavigate } from "react-router-dom"

const Order = ({ item }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate("/order-summary")}
      className="flex cursor-pointer justify-between rounded-lg px-5 py-3 shadow-itemOptions hover:bg-[#cccccc21]">
      <div className="flex flex-col">
        <h1 className="rubik text-lg font-medium">{item.name}</h1>
        <p className="rubik text-sm text-[#A3A3A3]">Order ID: {item.orderId}</p>
        <p className="rubik mt-2 text-sm text-[#A3A3A3]">{item.date}</p>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-lg font-bold text-primary">${item.cost}</p>
        <div
          className={`mt-1 ${item.status === "Open" && "rubik rounded-md bg-[#E9E9E9] px-2 py-1 text-center"}
            ${
              item.status === "Accepted" &&
              "rubik rounded-md bg-[#ECFFBA] px-2 py-1 text-center text-[#80AF00]"
            }
            ${
              item.status === "Ready" &&
              "rubik rounded-md bg-[#E1CDFF] px-2 py-1 text-center text-[#934AFF]"
            }
            ${
              item.status === "Preparing" &&
              "rubik rounded-md bg-[#FFF0C7] px-2 py-1 text-center text-[#D3A729]"
            }
            ${
              item.status === "Canceled" &&
              "rubik rounded-md bg-[#FFE4DE] px-2 py-1 text-center text-[#B71D18]"
            }
            ${
              item.status === "Completed" &&
              "rubik rounded-md bg-[#D6F1E8] px-2 py-1 text-center text-[#0B7E6E]"
            }
            `}>
          {item.status}
        </div>
        <span className="mt-2 text-xs">Accepted by: Me</span>
      </div>
    </div>
  )
}

export default Order
