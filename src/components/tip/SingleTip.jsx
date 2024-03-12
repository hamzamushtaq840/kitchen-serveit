import React from "react"

const SingleTip = ({ item }) => {
  return (
    <div className="flex cursor-pointer justify-between rounded-lg px-5 py-3 shadow-itemOptions hover:bg-[#cccccc21]">
      <div className="flex flex-col">
        <h1 className="rubik text-lg font-medium">{item.name}</h1>
        <p className="rubik text-sm text-[#A3A3A3]">Order ID: {item.orderId}</p>
        <p className="rubik mt-2 text-sm text-[#A3A3A3]">{item.date}</p>
      </div>
      <p className="my-auto text-lg font-bold text-primary">
        <span className="font-medium text-[#9C9C9C]">Tip Amount : </span>$
        {item.cost}
      </p>
    </div>
  )
}

export default SingleTip
