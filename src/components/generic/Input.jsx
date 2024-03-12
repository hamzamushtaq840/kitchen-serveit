import { ErrorMessage, Field } from "formik"
import React from "react"

const Input = ({
  label,
  showError = false,
  name,
  onChange,
  type = "text",
  placeholder,
  width = "100%",
  mt,
  errors,
  touched,
  disabled = false,
}) => {
  return (
    <div style={{ width: width, marginTop: mt }} className={`relative`}>
      <label for="email" className="font-medium">
        {label}
      </label>
      <div class="mt-1">
        {!showError && (
          <input
            name={name}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full rounded-lg border-0 bg-greyBg px-2 py-3 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`}
          />
        )}
        {showError && (
          <Field
            name={name}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full rounded-lg border-0 bg-greyBg px-2 py-3 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
              errors[name] && touched[name]
                ? "ring-red-500  focus:ring-red-500"
                : "ring-ring  focus:ring-primary"
            }`}
          />
        )}
      </div>
      {showError && (
        <ErrorMessage
          name={name}
          component={"div"}
          className="absolute bottom-[-18px] text-[13px] text-red-500"
        />
      )}
    </div>
  )
}

export default Input
