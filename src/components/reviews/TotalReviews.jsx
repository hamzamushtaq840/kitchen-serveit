import React from "react"
import { HiOutlineStar } from "react-icons/hi2"
import { HiStar } from "react-icons/hi2"

const TotalReviews = () => {
  return (
    <div className="mx-5 mt-20 flex rounded-lg bg-greyBg p-5">
      <div className="flex w-1/2 flex-col justify-center">
        <span className="rubik text-xl font-bold">4.1/5</span>
        <span className="rubik text-xs">Based on 100 Reviews</span>
        <div className="mt-6 flex gap-1">
          <HiStar className="h-6 w-6 text-primary" />
          <HiStar className="h-6 w-6 text-primary" />
          <HiStar className="h-6 w-6 text-primary" />
          <HiStar className="h-6 w-6 text-primary" />
          <HiOutlineStar className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
        <div className="flex items-center gap-2">
          <span>5</span>
          <span className="h-2 w-full flex-1 rounded-full bg-[#D9D9D9]">
            <div className="h-full w-full rounded-full bg-primary"></div>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>4</span>
          <span className="h-2 w-full flex-1 rounded-full bg-[#D9D9D9]">
            <div className="h-full w-[80%] rounded-full bg-primary"></div>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>3</span>
          <span className="h-2 w-full flex-1 rounded-full bg-[#D9D9D9]">
            <div className="h-full w-[60%] rounded-full bg-primary"></div>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>2</span>
          <span className="h-2 w-full flex-1 rounded-full bg-[#D9D9D9]">
            <div className="h-full w-[35%] rounded-full bg-primary"></div>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>1</span>
          <span className="h-2 w-full flex-1 rounded-full bg-[#D9D9D9]">
            <div className="h-full w-[5%] rounded-full bg-primary"></div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TotalReviews
