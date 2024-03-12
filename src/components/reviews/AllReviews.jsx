import React from "react"
import { reviews } from "../../utils/constants"
import { HiOutlineStar, HiStar } from "react-icons/hi2"

const AllReviews = () => {
  return (
    <div className="mx-5 flex flex-col gap-4">
      <div className="flex justify-end">
        <span className="rubik font-semibold tracking-wider">Most Recent</span>
      </div>
      <div className="flex flex-col gap-2 divide-y-2">
        {reviews.map(review => (
          <div className="flex gap-2 py-4">
            <img
              src={review.image}
              className="h-9 w-9 rounded-full object-cover"
              alt=""
              srcset=""
            />
            <div className="flex w-full flex-col">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="rubik mt-[-3px] font-medium">{review.name}</h1>
                  <h1 className="rubik text-xs text-grey">{review.time}</h1>
                </div>
                <div className="flex gap-1">
                  <HiStar className="h-3 w-3 text-primary" />
                  <HiStar className="h-3 w-3 text-primary" />
                  <HiStar className="h-3 w-3 text-primary" />
                  <HiStar className="h-3 w-3 text-primary" />
                  <HiOutlineStar className="h-3 w-3 text-primary" />
                </div>
              </div>

              <div className="rubik mt-3 text-sm">{review.review}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllReviews
