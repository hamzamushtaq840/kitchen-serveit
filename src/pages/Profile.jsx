import React from "react"
import toast from "react-hot-toast"
import { BiEdit } from "react-icons/bi"
import Input from "../components/generic/Input"
import TopBar from "../components/generic/TopBar"

const Profile = () => {
  return (
    <div className="flex flex-col ">
      <TopBar content={"Profile"} />
      <div className="relative mt-20 h-32 w-32 self-center rounded-full border border-primary bg-primaryBg">
        <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          <BiEdit className="text-button" />
        </div>
      </div>
      <div className="mt-4 flex w-[60%] flex-col xsm:w-full xsm:px-5">
        <Input
          label={"Full Name"}
          name={"name"}
          type={"name"}
          placeholder={"Name"}
        />
        <Input
          label={"Email Address"}
          name={"email"}
          type={"email"}
          disabled
          placeholder={"dummy@gmail.com"}
          mt={20}
        />
        <Input
          label={"Mobile"}
          name={"phone"}
          type={"number"}
          placeholder={"Mobile Number"}
          mt={20}
        />
        <button
          onClick={() => {
            toast.success("Profile updated successfully")
          }}
          className="text-button mb-4 mt-8 h-12 rounded-lg bg-primary text-lg font-bold">
          Update
        </button>
      </div>
    </div>
  )
}

export default Profile
