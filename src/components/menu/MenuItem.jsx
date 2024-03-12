import React from "react"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const MenuItem = ({ item, index }) => {
  const addedToCart = Array.from({ length: 6 }, () => Math.random() < 0.5)
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate("/item-detail", { state: item })}
      className="cursor-pointer overflow-hidden rounded-xl bg-greyBg hover:bg-[#ccccccc8]">
      <img
        src={item.image}
        className="flex h-[140px] w-full justify-center object-cover"
        alt=""
      />
      <div className="px-3 pt-3 pb-3">
        <p className="rubik font-semibold">{item.name}</p>
        <p className="rubik text-xs text-[#9C9C9C]">{item.desc}</p>
        <p className="mt-1 text-sm">{item.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-primary">${item.price}</p>

          {!addedToCart[index] && (
            <div onClick={(e) => { e.stopPropagation() }} className="flex h-6 items-center">
              <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <FaPlus className="h-4 w-4 text-primary hover:text-grey" />
              </button>
            </div>
          )}

          {addedToCart[index] && (
            <div onClick={(e) => { e.stopPropagation() }} className="flex items-center justify-center gap-3 rounded-full bg-white px-3 py-1">
              <button>
                <FaMinus className="h-4 w-4 text-primary hover:text-grey" />
              </button>
              <span>4</span>
              <button>
                <FaPlus className="h-4 w-4 text-primary hover:text-grey" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuItem
