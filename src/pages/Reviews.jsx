import React from "react"
import TopBar from "../components/generic/TopBar"
import TotalReviews from "../components/reviews/TotalReviews"
import AllReviews from "../components/reviews/AllReviews"
import { useNavigate } from "react-router-dom"

const Reviews = () => {
  const navigate = useNavigate()
  return (
    <div>
      <TopBar content={"Reviews"} />
      <TotalReviews />
      <hr className="mx-5 my-5" />
      <div className="mx-5">
        <button
          onClick={() => {
            navigate("/add-review")
          }}
          className="text-button h-12 w-full rounded-lg bg-primary text-lg font-bold">
          Add Review
        </button>
      </div>
      <hr className="mx-5 my-5" />
      <AllReviews />
    </div>
  )
}

export default Reviews
