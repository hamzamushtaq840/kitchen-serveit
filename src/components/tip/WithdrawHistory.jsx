import React from "react"
import TopBar from "../generic/TopBar"

const WithdrawHistory = () => {
  return (
    <div>
      <TopBar content="Withdraw History" />
      <section className="mx-5 mt-20">
        <div className="flex bg-primarySub py-2 text-white">
          <span className="flex w-1/2 justify-center">Date</span>
          <span className="flex w-1/2 justify-center">Tip Amount</span>
        </div>
        <div className="flex flex-col">
          {[1, 2, 3].map(v => {
            return (
              <div className="flex">
                <span className="flex w-1/2 justify-center  border py-2">
                  01/19/2024 19:23
                </span>
                <span className="flex w-1/2 justify-center border py-2 text-primary">
                  $50.00
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default WithdrawHistory
