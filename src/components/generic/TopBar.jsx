import React from "react"
import { IoChevronBackCircleOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const TopBar = ({ content }) => {
  const navigate = useNavigate()

  return (
    <div className="fixed top-0 z-[80] flex w-full items-center justify-between bg-white px-4 pb-4 pt-3 shadow-topBar">
      <div className="w-[60px] cursor-pointer">
        <IoChevronBackCircleOutline
          className="h-7 w-7 hover:text-grey"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="flex-1 text-center">
        <p className=" text-lg font-bold">{content}</p>
      </div>
      <div className="w-[60px]"></div>
    </div>
  )
}

export default TopBar
