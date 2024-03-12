import React, { useState } from "react"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { ImCreditCard } from "react-icons/im"
import TopBar from "../components/generic/TopBar"
import master from "./../assets/cart/master.png"
import visa from "./../assets/cart/visa.png"
import { useNavigate } from "react-router-dom"

const SelectMethod = () => {
  const [method, setMethod] = useState("") // State to store the selected method
  // const navigate = useNavigate()

  const handleMethodChange = selectedMethod => {
    setMethod(selectedMethod) // Update the state with the selected method
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <TopBar content={"Payment Method"} />

      <div className="m-5 mt-20 flex flex-1 flex-col gap-4">
        {/* select card */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FaRegMoneyBillAlt className="h-8 w-8" />
            <h1 className="rubik font-semibold">Cash</h1>
          </div>
          <input
            type="radio"
            className="h-5 w-5"
            name="paymentMethod"
            id="cash"
            onChange={() => handleMethodChange("cash")}
            checked={method === "cash"}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ImCreditCard className="h-8 w-8" />
            <div className="flex flex-col">
              <h1 className="rubik font-semibold">Credit or debit card</h1>
              <img src={visa} className="h-[12px] w-[42px]" alt="" srcSet="" />
            </div>
          </div>
          <input
            type="radio"
            className="h-5 w-5"
            name="paymentMethod"
            id="card"
            onChange={() => handleMethodChange("card")}
            checked={method === "card"}
          />
        </div>

        {method === "card" && (
          <div className="mt-5 flex  flex-col gap-4">
            <h1 className="rubik">Available Cards</h1>
            {/* master card */}
            <div className="flex flex-col rounded-lg bg-primaryBg p-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={master} className="w-8" />
                  <h1 className="rubik">Master Card</h1>
                </div>
                <input type="radio" name="ll" className="h-5 w-5" />
              </div>
              <span>**** **** **** 1234</span>
            </div>

            {/* visa */}
            <div className="flex flex-col rounded-lg bg-primaryBg p-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={visa} className="w-8" />
                  <h1 className="rubik">Visa</h1>
                </div>
                <input type="radio" name="ll" className="h-5 w-5" />
              </div>
              <span>**** **** **** 1234</span>
            </div>

            <button onClick={() => { navigate("/add-card") }} className="mt-3 rounded-xl border border-primary py-4 text-lg text-primary">
              Add new card
            </button>
          </div>
        )}
      </div>
      <div className="m-5 flex h-10 items-center">
        <button className="rubik text-button h-[54px] w-full rounded-lg bg-primary text-lg font-bold">
          Done
        </button>
      </div>
    </div>
  )
}

export default SelectMethod
