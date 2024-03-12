import React from "react"
import { HiOutlineStar, HiStar } from "react-icons/hi2"
import { IoLocationOutline } from "react-icons/io5"
import TopBar from "../components/generic/TopBar"
import logo from "./../assets/logo.svg"
import toast from "react-hot-toast"

const AddReview = () => {
  return (
    <div>
      <TopBar content={"Write a review"} />

      <div className="mx-5 mt-20 rounded-lg bg-[#F4F4F4] p-5">
        <div className="flex items-center bg-white p-2">
          <img src={logo} alt="" />
          <div className="flex flex-col gap-2">
            <span className="rubik font-semibold">Texas Grill House</span>
            <div className="flex gap-1">
              <IoLocationOutline className="h-6 w-6 text-primary" />
              <p className="text-sm text-grey">
                102 Gerrard St E, Toronto, ON M5B 1G9
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-5 flex flex-col gap-2 ">
        <span className="rubik mb-1 text-xl font-bold">
          Select the order you want to review
        </span>
        <select className="h-[47px] rounded border bg-white p-2 outline-none focus:ring-2 focus:ring-primary">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="m-5 flex flex-col gap-2 ">
        <span className="rubik mb-1 text-xl font-bold">Write a review</span>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Would you like to write anything about this restaurant?"
          className="rubik resize-none rounded border bg-[#F4F4F4] p-2 outline-none focus:ring-2 focus:ring-primary"></textarea>
        <span className="self-end text-sm text-[#6C6C6C]">
          500 characters remaining
        </span>
      </div>

      <div className="m-5 flex flex-col gap-2 ">
        <span className="rubik mb-3 text-xl font-bold">Rating</span>
        <div className="flex justify-center gap-2">
          <div className="flex gap-1">
            <HiStar className="h-12 w-12 text-primary" />
            <HiStar className="h-12 w-12 text-primary" />
            <HiStar className="h-12 w-12 text-primary" />
            <HiStar className="h-12 w-12 text-primary" />
            <HiOutlineStar className="h-12 w-12 text-primary" />
          </div>
        </div>
      </div>

      <div className="mx-5 mt-10">
        <button
          onClick={() => {
            toast.success("Review added successfully")
          }}
          className="text-button h-12 w-full rounded-lg bg-primary text-lg font-bold">
          Submit Review
        </button>
      </div>
    </div>
  )
}

export default AddReview
