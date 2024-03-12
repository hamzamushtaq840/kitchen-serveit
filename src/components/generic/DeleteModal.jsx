import React, { memo } from "react"
import AlertErrorIcon from "./../../assets/AlertErrorIcon.png"

const DeleteModal = ({ isOpen, onClose, onDelete, isLoading }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center text-center sm:py-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <img src={AlertErrorIcon} className="mx-auto mb-3 h-8  w-8" />
            <h3 className="rubik text-center text-2xl font-semibold leading-6 text-gray-900">
              Warning
            </h3>

            <div className="mt-2 text-center">
              <p className="rubik text-sm text-gray-500">
                Are you sure you want to delete this item?
              </p>
            </div>
          </div>
          <div className="mb-3 justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="rubik inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onDelete}>
              {isLoading
                ? // <img src={loader} className="mx-auto w-[16px]" />
                  "Loading"
                : "Delete"}
            </button>
            <button
              type="button"
              className="rubik mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(DeleteModal)
