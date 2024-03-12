import React from "react"
import Select from "../generic/Select"
import { useNavigate } from "react-router-dom"

const Manual = () => {
  const navigate = useNavigate()

  return (
    <div className="p-5">
      <span className="mb-2 text-xl font-semibold">Manual</span>
      <div className="mb-2 mt-3 flex flex-col gap-3">
        <Select
          label={"Section"}
          name={"section"}
          options={[1, 2]}
          placeholder={""}
        />
        <Select
          label={"Table No."}
          name={"section"}
          options={[1, 2]}
          placeholder={""}
        />

        <div
          onClick={() => {
            navigate("/select-menu")
          }}
          className="mt-4 flex items-center justify-center rounded-lg bg-primarySub py-3 text-white">
          Continue
        </div>
      </div>
    </div>
  )
}

export default Manual
