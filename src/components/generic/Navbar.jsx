import React, { useEffect, useRef, useState } from "react"
import { AiOutlineGift } from "react-icons/ai"
import { CiCirclePlus, CiClock2 } from "react-icons/ci"
import { GiTakeMyMoney } from "react-icons/gi"
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoCartOutline, IoMenu } from "react-icons/io5"
import { MdLogout, MdOutlineTableRestaurant } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"
import { useNavigate } from "react-router-dom"
import SelectOrderMode from "../dashboard/SelectOrderMode"

const Navbar = ({ displayCart = false }) => {
  let restaurentName = "Texas Grill House"
  const sideNavRef = useRef(null)
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [modal, openModal] = useState(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    function handleScroll() {
      setShowMenu(false)
    }

    // Add event listener to the document object for mousedown
    document.addEventListener("mousedown", handleClickOutside)
    // Add event listener to the window object for scroll
    window.addEventListener("scroll", handleScroll)

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }, [modal])

  return (
    <nav className="fixed top-0 z-[80] flex w-full items-center justify-between bg-white px-4 pb-4 pt-3">
      <div onClick={() => setShowMenu(!showMenu)} className="w-[60px]">
        <IoMenu className="h-6 w-6 cursor-pointer hover:text-grey" />
      </div>
      <div
        onClick={() => navigate("/dashboard")}
        className="flex flex-1 cursor-pointer justify-center text-lg font-semibold hover:underline">
        {restaurentName}
      </div>
      <div className="flex w-[60px] items-center justify-end gap-2">
        <IoIosNotificationsOutline className="h-6 w-6" />
      </div>

      {showMenu && (
        <div
          className={`absolute left-0 top-0 z-30 h-screen w-[100vw]	p-4 backdrop-blur-sm`}></div>
      )}
      <aside
        ref={sideNavRef}
        className={`absolute left-0 top-0 z-40 h-screen w-[232px] bg-white p-4 shadow-2xl ${showMenu ? "left-0" : "left-[-242px]"} transition-all duration-500`}>
        <div className="ml-3 flex justify-between">
          <h1 className="text-2xl font-extrabold">LOGO</h1>
          <button
            className="flex h-6 w-6 items-center justify-center rounded-md bg-red-200 text-red-500 "
            onClick={() => setShowMenu(false)}>
            <RxCross2 className="h-4 w-4  " />
          </button>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col gap-1 px-2">
          <div
            className="flex cursor-pointer items-center gap-3 rounded-lg px-1 py-2 text-xl font-medium text-black hover:bg-primaryBg"
            onClick={() => navigate("/dashboard")}>
            <div className="flex w-[25px] justify-end">
              <AiOutlineGift className="h-6 w-6" />
            </div>
            Dashboard
          </div>
          {/* 
          <div
            className="flex cursor-pointer items-center gap-3 rounded-lg px-1 py-2 text-xl font-medium text-black hover:bg-primaryBg"
            onClick={() => navigate("/table-manager")}>
            <div className="flex w-[25px] justify-end">
              <MdOutlineTableRestaurant className="h-6 w-6" />
            </div>
            Table Manager
          </div>

          <div
            className="flex cursor-pointer items-center gap-3 rounded-lg px-1 py-2 text-xl font-medium text-black hover:bg-primaryBg"
            onClick={() => navigate("/tip")}>
            <div className="flex w-[25px] justify-end">
              <GiTakeMyMoney className="h-6 w-6" />
            </div>
            Tip
          </div> */}

          <div
            className="flex cursor-pointer items-center gap-3 rounded-lg px-1 py-2 text-xl font-medium text-black hover:bg-primaryBg"
            onClick={() => navigate("/timesheet")}>
            <div className="flex w-[25px] justify-end">
              <CiClock2 className="h-6 w-6" />
            </div>
            Time Sheet
          </div>

          <div
            className="flex cursor-pointer items-center gap-3 rounded-lg px-1 py-2 text-xl font-medium text-black hover:bg-primaryBg"
            onClick={() => navigate("/")}>
            <div className="flex w-[25px] justify-end">
              <MdLogout className="h-6 w-6" />
            </div>
            Logout
          </div>
        </div>
      </aside>

      {modal && <SelectOrderMode close={() => openModal(false)} />}
    </nav>
  )
}

export default Navbar
