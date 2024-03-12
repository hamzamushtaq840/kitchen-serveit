import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { IoChevronBackOutline } from "react-icons/io5"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"

const MenuItemDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  let addedToCart = Math.floor(Math.random() < 0.5) === 1

  return (
    <div className="relative flex flex-col items-center xsm:items-start">
      <div className="relative flex w-[70%] flex-col items-center justify-center rounded-xl xsm:w-[100%] xsm:bg-white">
        {/* back button */}
        <div
          onClick={() => navigate(-1)}
          className="fixed left-3 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-white">
          <IoChevronBackOutline className="w-6 h-6 hover:text-grey" />
        </div>

        <img
          src={location?.state?.image}
          className="max-h-[400px] object-cover xsm:h-[277px] xsm:w-full"
          alt=""
        />

        <main className="w-[70%] py-8 xsm:w-full xsm:px-5">
          {/* item-details */}
          <section className="flex justify-between">
            <div>
              <p className="text-2xl font-bold">{location?.state?.name}</p>
              <p className="w-[90%] text-lg text-[#9C9C9C] xsm:text-sm">
                {location?.state?.desc}
              </p>
            </div>
            <span className="text-2xl font-bold text-primary">
              ${location.state.price}
            </span>
          </section>

          {/* item-options */}
          <section className="mt-8 rounded px-3 py-5 shadow-itemOptions">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex flex-col">
                <span className="rubik text-lg font-semibold">Choose Size</span>
                <span className="rubik text-xs text-primary">Select one</span>
              </div>
              <span className="rubik text-button rounded-full bg-primary px-3 py-1 text-sm">
                Required
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input className="h-5 w-5" type="radio" name="a" id="" />
                <span className="rubik">Small</span>
              </div>
              <span>${location.state.price}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input className="h-5 w-5" type="radio" name="a" id="" />
                <span className="rubik">Medium</span>
              </div>
              <span>${location.state.price}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input className="h-5 w-5" type="radio" name="a" id="" />
                <span className="rubik">Large</span>
              </div>
              <span>${location.state.price}</span>
            </div>
          </section>

          {/* add-ons */}
          <section className="flex flex-col">
            <div className="mb-3 mt-4 flex items-center justify-between">
              <span className="rubik text-lg font-semibold">Addon</span>
              <span className="rubik rounded-full bg-greyBg px-3 py-1 text-sm text-grey">
                Optional
              </span>
            </div>
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <input className="h-5 w-5" type="checkbox" name="" id="" />
                <span className="rubik">Cheese</span>
              </div>
              <span>${location.state.price}</span>
            </div>
            <div className="mt-3 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <input className="h-5 w-5" type="checkbox" name="" id="" />
                <span className="rubik">Hot Sauce</span>
              </div>
              <span>${location.state.price}</span>
            </div>
          </section>
        </main>
      </div>

      {/* total */}
      <div className="sticky bottom-0 z-[50] flex h-[70px] w-[49.2%] items-center justify-around bg-white px-4 shadow-bottomBar xsm:left-0 xsm:w-full">
        {/* increase or decrease */}
        {addedToCart && (
          <div className="flex items-center justify-center gap-4 rounded-full bg-white px-2 py-1">
            <button className="h-7 w-7 rounded-full bg-primary">
              <FaMinus className="mx-auto h-3 w-3 text-white" />
            </button>
            <span className="text-xl">4</span>
            <button className="h-7 w-7 rounded-full bg-primary">
              <FaPlus className="mx-auto h-3 w-3 text-white" />
            </button>
          </div>
        )}
        <button
          disabled={addedToCart}
          className="rubik text-button rounded-lg bg-primary px-12 py-3 font-semibold disabled:bg-greyBg disabled:text-ring">
          {addedToCart ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}

export default MenuItemDetail
