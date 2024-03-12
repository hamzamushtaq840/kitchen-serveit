import React, { useState } from "react"
import { ImCreditCard } from "react-icons/im"
import TopBar from "../components/generic/TopBar"
import master from "./../assets/cart/master.png"
import visa from "./../assets/cart/visa.png"
import DeleteModal from "../components/generic/DeleteModal"
import { MdOutlineDelete } from "react-icons/md"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Payments = () => {
  const [deleteModal, setDeleteModal] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
      <TopBar content={"Payment Method"} />
      <div className="mx-5 mt-20 flex items-center gap-4">
        <ImCreditCard className="h-8 w-8" />
        <div className="flex flex-col">
          <h1 className="rubik font-semibold">Credit or debit card</h1>
          <img src={visa} className="h-[12px] w-[42px]" alt="" srcSet="" />
        </div>
      </div>

      <div className="m-5 mt-5 flex  flex-col gap-4">
        {/* master card */}
        <div className="flex items-center rounded-lg bg-primaryBg p-4">
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={master} className="w-8" />
              <h1 className="rubik">Master Card</h1>
            </div>
            <span>**** **** **** 1234</span>
          </div>
          <MdOutlineDelete
            onClick={() => setDeleteModal(true)}
            className="h-8 w-8 text-red-500"
          />
        </div>

        {/* visa */}
        <div className="flex items-center rounded-lg bg-primaryBg p-4">
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={visa} className="w-8" />
              <h1 className="rubik">Visa</h1>
            </div>
            <span>**** **** **** 1234</span>
          </div>
          <MdOutlineDelete
            onClick={() => setDeleteModal(true)}
            className="h-8 w-8 text-red-500"
          />
        </div>

        <button onClick={() => navigate("/add-card")} className="mt-3 rounded-xl border border-primary py-3 text-lg text-primary">
          Add new card
        </button>
      </div>

      <DeleteModal
        isOpen={deleteModal}
        onClose={() => {
          setDeleteModal(false)
        }}
        onDelete={() => {
          setDeleteModal(false)
          toast.success("Payment method deleted successfully")
        }}
      />
    </div>
  )
}

export default Payments
