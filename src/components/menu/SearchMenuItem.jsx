import React from "react"
import { GoSearch } from "react-icons/go"

const SearchMenuItem = () => {
  return (
    <div className="relative px-4">
      <input
        type="text"
        className="focus:ring-in mt-4 h-[56px] w-full rounded-full bg-greyBg indent-12 outline-none ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
        placeholder="Search"
      />
      <GoSearch className="absolute left-8 top-[62%] h-5 w-5 -translate-y-1/2 text-grey" />
    </div>
  )
}

export default SearchMenuItem
