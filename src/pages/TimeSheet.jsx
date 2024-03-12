import React, { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import TopBar from "../components/generic/TopBar"
import { IoChevronBackCircleOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const TimeSheet = () => {
  const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const updateCurrentDateTime = () => {
      const date = new Date()
      const timeOptions = {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }
      const dateOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
      const formattedTime = date.toLocaleString("en-US", timeOptions)
      const formattedDate = date.toLocaleString("en-US", dateOptions)
      setCurrentTime(formattedTime)
      setCurrentDate(formattedDate)
    }

    // Update the current time and date every second
    const intervalId = setInterval(updateCurrentDateTime, 1000)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <div className="fixed top-0 z-[80] flex w-full items-center justify-between bg-white px-4 pb-4 pt-3 shadow-topBar">
        <div className="w-[60px] cursor-pointer">
          <IoChevronBackCircleOutline
            className="h-7 w-7 hover:text-grey"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="flex-1 text-center">
          <p className=" text-lg font-bold">Time Sheet</p>
        </div>
        <div
          className="w-[60px] text-primary hover:underline"
          onClick={() => navigate("/timesheet-history")}>
          History
        </div>
      </div>

      {!started && (
        <>
          <div className="mt-20 flex flex-col items-center">
            <span className="rubik text-3xl font-bold">Hi, Wendy</span>
            <span className="mt-3 text-xl font-bold text-primary">
              Good Day, Wendy!
            </span>
            <div className="mt-5 max-w-[226px] text-center text-xl font-bold">
              Tap the button below to clock in!
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <IoIosArrowDown className="arrow h-6 w-6" />
            <IoIosArrowDown className="arrow h-6 w-6" />
            <IoIosArrowDown className="arrow h-6 w-6" />
          </div>
          <div className="relative left-[50%] mt-6 h-[150px] w-[150px] -translate-x-[50%] rounded-full">
            <div className="elementToFadeInAndOut absolute left-0 top-0 z-10 h-[150px] w-[150px] rounded-full bg-[#C8E3C5]"></div>
            <button
              onClick={() => setStarted(true)}
              className="rubik absolute left-[50%] top-[50%] z-10 flex h-[130px] w-[130px] -translate-x-[50%] -translate-y-[50%] items-center  justify-center rounded-full bg-[#38B040] text-2xl font-bold text-white">
              Start
            </button>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <span className="rubik text-2xl font-semibold">{currentTime}</span>
            <span className="rubik font-medium">{currentDate}</span>
          </div>
        </>
      )}

      {started && (
        <>
          <div className="mt-20 flex flex-col items-center">
            <span className="rubik text-3xl font-bold">Hi, Wendy</span>
          </div>

          <div className="mx-5 mt-2 flex flex-col">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-semibold">Collected hours</span>
              <span className="text-2xl font-semibold text-[#098021]">
                5h 37m/ 9h 0m
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg border p-3">
              <div className="flex flex-col items-start gap-2">
                <span className="rubik rounded-lg bg-[#E4F6E2] px-2 py-1 text-sm text-[#098021]">
                  Clocked in
                </span>
                <span className="rubik text-sm text-grey">
                  Work starts at: 09:30 AM
                </span>
              </div>

              <div className="rubik text-lg font-semibold">09:26 AM</div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg border p-3 py-6">
              <div className="flex flex-col items-start gap-2">
                <span className="rubik rounded-lg bg-[#E7E3DD] px-2 py-1 text-sm text-[#A3805D]">
                  Clock Out
                </span>
              </div>
              <span className="rubik text-sm text-grey">
                Work ends at: 06:30 PM
              </span>
            </div>
          </div>

          <div className="relative left-[50%] mt-[17px] h-[150px] w-[150px] -translate-x-[50%] rounded-full">
            <div className="elementToFadeInAndOut absolute left-0 top-0 z-10 h-[150px] w-[150px] rounded-full bg-[#E7E3DD]"></div>
            <button
              onClick={() => setStarted(false)}
              className="rubik absolute left-[50%] top-[50%] z-10 flex h-[130px] w-[130px] -translate-x-[50%] -translate-y-[50%] items-center  justify-center rounded-full bg-[#A3805D] text-xl font-bold text-white">
              Clock Out
            </button>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <span className="rubik text-2xl font-semibold">{currentTime}</span>
            <span className="rubik font-medium">{currentDate}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default TimeSheet
