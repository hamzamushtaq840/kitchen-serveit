import React, { useState } from "react"
import { AiOutlinePercentage } from "react-icons/ai"
import { FaMinus, FaPlus, FaUsers } from "react-icons/fa"
import { IoPersonOutline } from "react-icons/io5"
import AddItems from "./AddItems"

const SplitBill = () => {
  const [state, setState] = useState(0)
  const [enable, setEnable] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <>
      <div className="mx-5 mb-4 flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <div className="ml-[-2px] rounded-full border border-primary p-1">
            <AiOutlinePercentage className="h-3 w-3 text-primary" />
          </div>
          <h1 className="rubik text-xl font-bold">Need a Split Bill ?</h1>
        </div>
        <input
          className="h-4 w-4"
          type="checkbox"
          value={enable}
          onChange={() => setEnable(!enable)}
        />
      </div>
      {/* <section className="grid grid-cols-3 gap-2 px-4"> */}

      {enable && (
        <div className="mx-5 mb-8 mt-1 flex flex-col items-start gap-2 rounded p-4 shadow-itemOptions">
          <div className="flex w-full">
            <div className="flex flex-1 items-center gap-2">
              <FaUsers className="h-5 w-5 text-primary" />
              <span className="rubik font-medium">Persons</span>
            </div>
            <div className="flex items-center gap-3 rounded-md border px-2 py-1">
              <FaMinus
                onClick={() => {
                  if (state > 0) {
                    setState(state - 1)
                  }
                }}
                className="mx-auto h-3 w-3 text-black hover:text-ring"
              />
              <span className="flex w-[20px] justify-center text-lg">
                {state}
              </span>
              <FaPlus
                onClick={() => {
                  setState(state + 1)
                }}
                className="mx-auto h-3 w-3 text-black hover:text-ring"
              />
            </div>
          </div>

          {state > 0 && (
            <div className="mb-2 flex w-full flex-col gap-2">
              {Array.from({ length: state }, (_, index) => index % 10).map(
                (v, i) => {
                  return (
                    <div className="flex h-[70px] justify-between rounded-md border border-[#9B9B9B] pl-2 pr-3">
                      <div className="mx-1 flex items-center gap-2">
                        <IoPersonOutline className="text-primary" />
                        <div className="flex flex-col">
                          <span className="font-medium">Person {i + 1}</span>
                          {i === 1 && (
                            <span className="text-xs font-medium text-grey">
                              Items : 2
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setModal(true)
                        }}
                        className="text-sm text-primary">
                        {i === 1 ? "Edit" : "Assign Items"}
                      </button>
                    </div>
                  )
                }
              )}
            </div>
          )}

          {modal && <AddItems close={() => setModal(false)} />}
        </div>
      )}
    </>
  )
}

export default SplitBill
