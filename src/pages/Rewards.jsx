import React from "react"
import Menu from "../components/menu/Menu"
import TopBar from "../components/generic/TopBar"

const Rewards = () => {
  return (
    <div>
      <TopBar content={"Rewards"} />
      <div className="mb-8 mt-20 flex items-center justify-center">
        <span className="text-2xl font-semibold text-grey">
          Points : <span className="text-4xl text-primary">456</span>
        </span>
      </div>
      <Menu />
    </div>
  )
}

export default Rewards
