import { Field } from "formik"
import React from "react"

const Select = ({
  label,
  showError = false,
  name,
  onChange,
  options,
  placeholder,
  width = "100%",
  mt,
  errors,
  touched,
}) => {
  return (
    <div style={{ width: width, marginTop: mt }} className={`relative`}>
      <label for={name} className="text-sm font-medium">
        {label}
      </label>
      <div class="mt-1">
        {!showError && (
          <select
            className={`h-[40px] w-full rounded-lg border bg-white px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
            onChange={onChange}
            name={name}>
            {options.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              )
            })}
          </select>
        )}
        {showError && (
          <Field
            className={`h-[40px] w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
              errors[name] && touched[name]
                ? "ring-red-500  focus:ring-red-500"
                : "ring-ring  focus:ring-focus"
            }`}
            as="select"
            name="player2">
            {options &&
              options.map(o => (
                <option key={i} value={o}>
                  {o}
                </option>
              ))}
          </Field>
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

export default Select
