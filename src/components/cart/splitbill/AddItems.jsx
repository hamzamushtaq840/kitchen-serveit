import React, { useState } from "react"
import Item from "./Item"
import { cartItems } from "../../../utils/constants"

const AddItems = ({ close }) => {
  const [selectedItems, setSelectedItems] = useState([])

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
        <div className="inline-block w-[90%] transform overflow-hidden rounded-lg bg-white p-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xl font-semibold">Assign Items</span>
            <span className="text-xs text-grey">
              Selected Items : {selectedItems.length}/{cartItems.length}
            </span>
          </div>
          <div className="rounded-2 mt-3 flex flex-col gap-2">
            {cartItems.map(v => (
              <Item
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                item={v}
              />
            ))}
          </div>
          <div
            onClick={close}
            className="mt-4 flex items-center justify-center rounded-lg bg-primarySub py-3 text-white">
            Assign
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddItems
