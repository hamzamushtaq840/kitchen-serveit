import React from "react"
import Navbar from "../components/generic/Navbar"
import { FaFilter } from "react-icons/fa"
import { orders } from "../utils/constants"
import Order from "../components/orders/Order"
import { BiFilterAlt } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <section className="mt-20 flex justify-center text-xl font-medium text-primary underline">
        <span>Active Time : &nbsp;</span>
        <span> 05h 36m</span>
      </section>

      <section className="mx-5 mt-5 flex flex-col gap-5">
        <span className="text-xl font-semibold">Orders</span>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="col-span-2 flex h-[85px] w-[60%] items-center justify-between rounded-xl bg-[#ECFFBA] px-5 text-[#80AF00]">
              <span className="text-lg font-medium">Accepted</span>
              <span className="text-3xl font-bold">43</span>
            </div>
            <div className="col-span-2 flex h-[85px] w-[40%] items-center justify-between rounded-xl bg-[#E0CDFF] px-5 text-[#934AFF]">
              <span className="text-lg font-medium">Ready</span>
              <span className="text-3xl font-bold">23</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex h-[85px] w-[100%] items-center justify-between rounded-xl bg-[#E9E9E9] px-5 text-[#575757]">
          <span className="text-lg font-medium">Open</span>
          <span className="text-3xl font-bold">23</span>
        </div>
      </section>

      <section className="mx-5 mt-5 flex flex-col gap-5">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">All</span>
          <div className="flex items-center gap-1">
            <BiFilterAlt className="h-6 w-6" />
            <IoIosArrowDown />
          </div>
        </div>

        {orders.map((v, index) => (
          <Order key={index} item={v} />
        ))}

        <div className="mb-4 flex items-center justify-center gap-2">
          <IoIosArrowBack />
          <div className="flex items-center  justify-center gap-1">
            <div className="rounded border border-primary bg-secondary px-2">
              1
            </div>
            <div className="px-2">2</div>
            <div className="px-2">3</div>
          </div>
          <IoIosArrowForward />
        </div>
      </section>
    </div>
  )
}

export default Dashboard
