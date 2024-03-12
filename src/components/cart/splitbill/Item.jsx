import React from "react"
import { RxCross2 } from "react-icons/rx"

const Item = ({ item, selectedItems, setSelectedItems }) => {
  const checkAndAddItem = () => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(selectedItems.filter(v => v !== item.id))
    } else {
      setSelectedItems([...selectedItems, item.id])
    }
  }

  return (
    <div
      onClick={checkAndAddItem}
      className={`flex items-center gap-3 rounded-lg ${selectedItems.includes(item.id) ? "bg-[#ffcba946] outline outline-[1px] outline-primary" : "bg-[#cccccc28]"} p-2`}>
      <img
        src={item.image}
        className="h-14 w-14 rounded-md object-cover"
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
                    <span className="text-[10px]">{v?.name}</span>
                  </div>
                ))}
              </>
            )}
            {item?.addons?.length > 0 && (
              <>
                {item?.addons?.map((v, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-[10px]">{v?.name}</span>
                    <RxCross2 className="h-3 w-3 text-red-500" />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
