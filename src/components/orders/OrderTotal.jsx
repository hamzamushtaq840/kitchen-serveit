import React from "react"
import { FaRegListAlt } from "react-icons/fa"

const OrderTotal = () => {
  return (
    <section>
      <div className="m-5 flex items-center gap-2">
        <FaRegListAlt className="h-5 w-5 text-primary" />
        <h1 className="rubik text-xl font-bold">Order Summary</h1>
      </div>

      <div className="mx-5 mb-8 mt-1 flex flex-col items-start gap-2 rounded p-4 shadow-itemOptions">
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Burger ‘Wanted’</span>
          <span className="rubik font-bold">$17</span>
        </div>{" "}
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Burger</span>
          <span className="rubik font-bold">$167</span>
        </div>{" "}
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Pizza (Medium)</span>
          <span className="rubik font-bold">$167</span>
        </div>{" "}
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Soft Drink</span>
          <span className="rubik font-bold">$167</span>
        </div>{" "}
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Cake</span>
          <span className="rubik font-bold">$167</span>
        </div>{" "}
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Chicken</span>
          <span className="rubik font-bold">$167</span>
        </div>
        <div className="my-2 h-[1px] w-full bg-[#9B9B9B]"></div>
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Subtotal</span>
          <span className="rubik font-bold">$167</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Tax (10%)</span>
          <span className="rubik font-bold">$5</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Tip</span>
          <span className="rubik font-bold">$7</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Promo Discount</span>
          <span className="rubik font-bold">-$67</span>
        </div>
        <div className="mt-2 h-[1px] w-full bg-[#9B9B9B]"></div>
        <div className="mt-3 flex w-full items-center justify-between">
          <span className="rubik font-bold">Total</span>
          <span className="rubik font-bold">$100</span>
        </div>
        <div className="mt-2 flex w-full items-center justify-between">
          <span className="rubik font-bold">Paid With</span>
          <span className="rubik ">Cash</span>
          <span className="rubik text-[#edbb32]">Pending</span>
        </div>
      </div>
    </section>
  )
}

export default OrderTotal
