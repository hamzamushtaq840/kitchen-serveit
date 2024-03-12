import React, { useEffect, useRef } from "react"
import { MdDeleteOutline } from "react-icons/md"

const CustomTip = ({ customTip, setCustomTip, setSelectedDiscount }) => {
  const inputRef = useRef()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [customTip])


  return (
    <div>
      {!customTip && (
        <div
          onClick={() => {

            setCustomTip(!customTip);
            setSelectedDiscount(0)
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
          className={`text-bold rubik m-5 flex h-11 items-center justify-center rounded border-[0.5px] border-[#9B9B9B] bg-[#FAFBFD]`}>
          Add Custom Tip
        </div>
      )}

      {customTip && (
        <div className="relative m-5 flex items-center justify-between">
          <input
            ref={inputRef}
            type={"number"}
            placeholder={"Enter Tip Amount"}
            className={`placeholder:rubik h-11 w-[92%] rounded border-[0.5px] border-[#9B9B9B] bg-[#FAFBFD] px-2 indent-4 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
          />
          <MdDeleteOutline
            onClick={() => setCustomTip(false)}
            className="h-6 w-6 text-red-500"
          />
          <div className="absolute left-2 text-grey">$</div>
        </div>
      )}
    </div>
  )
}

export default CustomTip
