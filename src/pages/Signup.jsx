import React from "react"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import Input from "../components/generic/Input"

const Signup = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-dvh flex-col items-center">
      <IoArrowBackCircleOutline
        onClick={() => {
          navigate(-1)
        }}
        className="mt-4 self-start px-4"
      />
      <h1 className=" mb-4 mt-2 text-3xl font-bold leading-9">Signup</h1>
      <p className="text-base font-medium">Enter your details to register</p>
      <div className="mt-4 flex w-[60%] flex-col xsm:w-full xsm:px-4">
        <Input
          label={"Full Name"}
          name={"email"}
          type={"email"}
          placeholder={"Email"}
        />
        <Input
          label={"Email Address"}
          name={"email"}
          type={"email"}
          placeholder={"Email"}
          mt={20}
        />
        <Input
          label={"Password"}
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          mt={20}
        />
        <Input
          label={"Confirm Password"}
          name={"confirmPassword"}
          type={"password"}
          placeholder={"Confirm Password"}
          mt={20}
        />
        <button
          onClick={() => {
            toast.success("Account Created")
            navigate("/")
          }}
          className="text-button mb-4 mt-8 h-12 rounded-lg bg-primary text-lg font-bold">
          Signup
        </button>

        <button className="mb-4 flex h-12 items-center justify-center gap-2 rounded-lg bg-greyBg font-medium text-black">
          <FcGoogle className="h-[26px] w-[26px]" />
          Google
        </button>

        <span className="flex justify-center">
          <span className="text-grey">Already have an account?&nbsp;</span>
          <span
            className="cursor-pointer font-bold text-primary hover:underline"
            onClick={() => navigate("/")}>
            Login
          </span>
        </span>
      </div>
    </div>
  )
}

export default Signup
