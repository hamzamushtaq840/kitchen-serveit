import React, { useState } from "react"
import toast from "react-hot-toast"
import { IoChevronBackCircleOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import SingleTip from "../components/tip/SingleTip"
import { tips } from "../utils/constants"

const Tip = () => {
  const navigate = useNavigate()
  const [disable, setDisable] = useState(false)

  return (
    <div>
      <div className="fixed top-0 z-[80] flex w-full items-center justify-between bg-white px-4 pb-4 pt-3 shadow-topBar">
        <div className="w-[60px] cursor-pointer">
          <IoChevronBackCircleOutline
            className="h-7 w-7 hover:text-grey"
            onClick={() => navigate(-1)}
          />
        </div>

        <div className="text-center">
          <p className="text-lg font-bold">Tip</p>
        </div>

        <div
          onClick={() => {
            navigate("/withdraw-history")
          }}
          className="font-medium text-primary hover:underline">
          History
        </div>
      </div>

      <div className="mb-8 mt-20 flex items-center justify-center">
        <span className="flex items-center gap-2 text-2xl font-semibold text-grey">
          Tip : <span className="text-4xl text-primary ">$ 456</span>
        </span>
      </div>
      <div className="mx-5">
        <button
          onClick={() => {
            toast.success("Withdraw Request Sent")
            setDisable(true)
          }}
          disabled={disable}
          className="rubik mb-4 w-full rounded-xl bg-primary py-4 text-button disabled:bg-[#E9E9E9] disabled:text-grey">
          {disable ? "Withdraw Request Sent" : "Withdraw Request"}
        </button>
      </div>

      <section className="mx-5 mt-5 flex flex-col gap-5">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">Tip History</span>
        </div>

        {tips.map((v, index) => (
          <SingleTip key={index} item={v} />
        ))}
      </section>
    </div>
  )
}

export default Tip
