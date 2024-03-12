import React from "react"
import TopBar from "../generic/TopBar"

const TimeSheetHistory = () => {
  return (
    <div>
      <TopBar content="Time Sheet History" />
      <section className="mx-5 mt-20">
        <div className="flex bg-primarySub py-2 text-white">
          <span className="flex w-1/3 justify-center">Clock in</span>
          <span className="flex w-1/3 justify-center">Clock out</span>
          <span className="flex w-1/3 justify-center">Hours</span>
        </div>
        <div className="flex flex-col">
          {[1, 2, 3].map(v => {
            return (
              <div className="flex">
                <span className="flex w-1/3 flex-col items-center  border py-2">
                  <span>01/12/2024</span>
                  <span className="text-sm ">09:00 AM</span>
                </span>
                <span className="flex w-1/3 flex-col items-center  border py-2">
                  <span>01/12/2024</span>
                  <span className="text-sm ">05:00 PM</span>
                </span>
                <span className="flex w-1/3 items-center justify-center border py-2 text-primary">
                  8h 2m
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default TimeSheetHistory
