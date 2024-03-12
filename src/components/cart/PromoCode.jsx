import React from "react"

const PromoCode = () => {
  return (
    <div className="m-5 flex justify-between gap-2 rounded border border-black py-1 pr-2">
      <input
        type={"number"}
        placeholder={"Promo Code"}
        className={`placeholder:rubik h-11 w-[80%] rounded px-2 indent-4 text-gray-900  outline-none placeholder:text-gray-400 focus:ring-0  sm:text-sm sm:leading-6`}
      />
      <button className="text-button flex-1 rounded bg-primary">Apply</button>
    </div>
  )
}

export default PromoCode
