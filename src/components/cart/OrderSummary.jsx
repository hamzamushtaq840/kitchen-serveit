import React from "react"
import { FaRegListAlt } from "react-icons/fa"

const OrderSummary = () => {
  return (
    <section>
      <div className="m-5 flex items-center gap-2">
        <FaRegListAlt className="h-5 w-5 text-primary" />
        <h1 className="rubik text-xl font-bold">Order Summary</h1>
      </div>

      <div className="mx-5 mb-8 mt-1 flex flex-col items-start gap-2 rounded p-4 shadow-itemOptions">
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
        <div className="flex w-full items-center justify-between">
          <span className="rubik">
            Person 1 <span className="text-xs text-grey">(Items 2)</span>
          </span>
          <span className="rubik font-bold">$40</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="rubik">
            Person 2 <span className="text-xs text-grey">(Items 4)</span>
          </span>
          <span className="rubik font-bold">$22</span>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="rubik">Cost per person</span>
          <span className="rubik font-bold">$67</span>
        </div>
        <div className="mt-2 h-[1px] w-full bg-[#9B9B9B]"></div>
        <div className="mt-3 flex w-full items-center justify-between">
          <span className="rubik">Total</span>
          <span className="rubik font-bold">$100</span>
        </div>
      </div>
    </section>
  )
}

export default OrderSummary
