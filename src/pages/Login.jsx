import React from "react"
import logo from "./../assets/logo.svg"
import google from "./../assets/google.svg"
import guest from "./../assets/guest.svg"
import Input from "../components/generic/Input"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { FaRegCircleUser } from "react-icons/fa6"

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <img src={logo} className="w-[103px]" alt="" />
      <h1 className=" mb-4 mt-4 text-3xl font-bold leading-9">Login</h1>
      <p className="text-base font-medium">
        Enter your email and password to login
      </p>

      <div className="mt-8 flex w-[60%] flex-col  xsm:w-full xsm:px-4">
        <Input
          label={"Email Address"}
          name={"email"}
          type={"email"}
          placeholder={"Email"}
        />
        <Input
          label={"Password"}
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          mt={20}
        />
        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
        </div>
        <button
          onClick={() => {
            toast.success("Login Successfull")
            navigate("/dashboard")
          }}
          className="mb-4 mt-10 h-12 rounded-lg bg-primary font-medium text-button">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
