import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

const SelectTip = ({ selectedDiscount, setSelectedDiscount }) => {
  return (
    <>
      <div className="mx-5 mb-4 flex items-center gap-2">
        <GiTakeMyMoney className="h-6 w-6 text-primary" />
        <h1 className="rubik text-xl font-bold">
          Tip{" "}
          <span className="text-sm font-semibold text-grey">(Optional)</span>
        </h1>
      </div>
      <section className="grid grid-cols-3 gap-2 px-4">
        {[15, 20, 25].map(v => (
          <div
            onClick={() => {
              setSelectedDiscount(v)
            }}
            className={`relative flex h-20 flex-col items-center justify-center rounded border-[0.5px] ${selectedDiscount === v ? "border-primary bg-primaryBg" : "border-[#9B9B9B] bg-[#FAFBFD]"} font-semibold`}>
            <span className="text-primary">{v}%</span>
            <span className="text-xs font-normal text-grey">$3.34</span>
            {selectedDiscount === v && (
              <div className="bg-red-200 px-[1px] py-[1px] rounded absolute right-1 top-1 ">
                <RxCross2 onClick={(e) => { e.stopPropagation(); setSelectedDiscount(0) }} className="h-4 w-4 text-red-500" />
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  )
}

export default SelectTip