import React, { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"
import QRCode from "./QRCode"
import Manual from "./Manual"

const SelectOrderMode = ({ close }) => {
  const [selected, setSelected] = useState(null)

  let options = {
    qrCode: <QRCode close={close} />,
    manual: <Manual close={close} />,
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {selected === null && (
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
          <div className="inline-block w-[80%] transform overflow-hidden rounded-lg bg-white p-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
            <span className="mb-2 text-xl font-semibold">Create Order</span>
            <div className="mb-2 mt-3 flex flex-col divide-y-[1px] divide-[#ccc]">
              <div
                onClick={() => setSelected("qrCode")}
                className="flex items-center justify-between py-3">
                <span className="font-medium">Scan QR code</span>
                <IoIosArrowForward />
              </div>
              <div
                onClick={() => setSelected("manual")}
                className="flex items-center justify-between py-3">
                <span className="font-medium">Manual</span>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      )}
      {selected !== null && (
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
          <div className="inline-block w-[80%] transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
            {options[selected]}
          </div>
        </div>
      )}
    </div>
  )
}

export default SelectOrderMode
