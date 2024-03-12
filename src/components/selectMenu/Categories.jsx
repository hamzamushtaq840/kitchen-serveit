import React, { useRef } from "react"

import { categories } from "../../utils/constants"

const Categories = ({ selected, setSelected }) => {
  const categoryContainerRef = useRef(null)

  const handleClick = categoryName => {
    setSelected(categoryName)
  }

  const centerActiveItem = () => {
    if (categoryContainerRef.current) {
      const activeElement = categoryContainerRef.current.querySelector(
        `[data-category="${selected}"]`
      )
      if (activeElement) {
        const scrollContainer = categoryContainerRef.current
        const scrollRect = scrollContainer.getBoundingClientRect()
        const activeRect = activeElement.getBoundingClientRect()
        const scrollLeftPosition =
          activeRect.left -
          scrollRect.left -
          scrollRect.width / 2 +
          activeRect.width / 2
        scrollContainer.scrollLeft += scrollLeftPosition
      }
    }
  }

  React.useEffect(() => {
    centerActiveItem()
  }, [selected])

  return (
    <>
      <h1 className=" rubik mb-2 mt-3 pl-4 text-base font-semibold">
        Categories
      </h1>
      <div
        ref={categoryContainerRef}
        className="mr-2 flex overflow-x-auto container1 pl-4">
        {categories?.map((v, index) => {
          return (
            <div key={index} data-category={v.name} className="py-[1px]">
              <div
                onClick={() => handleClick(v.name)}
                className={`mr-2 box-border flex min-w-[80px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md px-2 py-2 ${selected === v.name ? "rounded-md border-primary bg-primaryBg outline outline-[1px] outline-primary" : 'outline-none border-none'} transition-all duration-350`}>
                <img
                  src={v.image}
                  className="h-[54px] min-h-[54px] w-[54px] min-w-[54px] rounded-full"
                />
                <span className="whitespace-nowrap text-sm">{v.name}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
