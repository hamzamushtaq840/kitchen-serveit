import React, { useState } from "react"

const ChangeStatus = ({ close }) => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center text-center sm:py-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={close}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block w-[70%] transform overflow-hidden rounded-lg bg-white p-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <span className="mb-2 text-xl font-semibold">Status</span>
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex h-[48px] items-center justify-between rounded-lg border border-primary bg-[#FDF0E7] px-3">
              <span className="flex h-[26px] rounded bg-[#ECFFBA] px-[7px] text-[#80AF00]">
                Accepted
              </span>
              <span className="text-primary">Selected</span>
            </div>
            <div className="flex h-[48px] items-center justify-between rounded-lg border border-[#575757] px-3">
              <span className="flex h-[26px] rounded bg-[#FFE4DE] px-[7px] text-[#B71D18]">
                Canceled
              </span>
              <span className="text-primary">Select</span>
            </div>
            <div className="flex h-[48px] items-center justify-between rounded-lg border border-[#575757] px-3">
              <span className="flex h-[26px] rounded bg-[#E0CDFF] px-[7px] text-[#934AFF]">
                Ready
              </span>
              <span className="text-primary">Select</span>
            </div>
            <div className="flex h-[48px] items-center justify-between rounded-lg border border-[#575757] px-3">
              <span className="flex h-[26px] rounded bg-[#E9E9E9] px-[7px] text-[#575757]">
                Open
              </span>
              <span className="text-primary">Select</span>
            </div>
          </div>

          <div className="mb-3 mt-4 flex flex-row-reverse justify-center gap-2 bg-gray-50 sm:px-6">
            <button
              type="button"
              className="rubik inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primarySub focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={close}>
              Update
            </button>
            <button
              type="button"
              className="rubik inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={close}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeStatus
