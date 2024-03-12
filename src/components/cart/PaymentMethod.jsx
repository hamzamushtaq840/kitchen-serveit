import React from "react"
import wallet from "./../../assets/cart/wallet.png"

const PaymentMethod = () => {
  return (
    <section className="mx-5 my-6 flex items-start rounded p-4 shadow-itemOptions">
      <img src={wallet} className="h-6 w-6" alt="" />
      <div className="ml-3 flex flex-1 flex-col">
        <span className="font-semibold">Payment method</span>
        <span className="text-sm text-grey">Cash</span>
      </div>
    </section>
  )
}

export default PaymentMethod
