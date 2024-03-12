import React from "react"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"

const CartItem = ({ item }) => {
  return (
    <div className="flex gap-3 rounded-lg bg-[#cccccc28] p-2">
      <img
        src={item.image}
        className="h-20 w-20 rounded-md object-cover"
        alt=""
        srcset=""
      />

      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 flex-col">
          <p className="font-semibold">{item.name}</p>
          <p className="font-bold text-primary">${item.totalCost}</p>
          <div className="flex flex-wrap gap-2">
            {item?.required?.length > 0 && (
              <>
                {item?.required?.map((v, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-xs">{v?.name}</span>
                  </div>
                ))}
              </>
            )}
            {item?.addons?.length > 0 && (
              <>
                {item?.addons?.map((v, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-xs">{v?.name}</span>
                    <RxCross2 className="h-3 w-3 text-red-500" />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="flex h-full flex-col justify-center gap-2 rounded border border-primary px-4">
          <FaPlus className="mx-auto h-3 w-3 text-ring" />
          <span className="text-lg">4</span>
          <FaMinus className="mx-auto h-3 w-3 text-ring" />
        </div>
      </div>

      <div className="self-start rounded bg-[#FFCCA9] p-1 text-red-500">
        <RxCross2 />
      </div>
    </div>
  )
}

export default CartItem
