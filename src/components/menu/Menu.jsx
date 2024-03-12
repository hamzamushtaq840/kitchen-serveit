import React from "react"
import MenuItem from "./MenuItem"
import { menuItems } from "../../utils/constants"

const Menu = () => {
  return (
    <div className="grid grid-cols-6 gap-5 px-4 pb-4 pt-3 xsm:grid-cols-2">
      {menuItems.map((v, index) => (
        <MenuItem key={v.id} index={index} item={v} />
      ))}
    </div>
  )
}

export default Menu
