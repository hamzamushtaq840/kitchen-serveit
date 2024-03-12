import React, { useState, useRef } from "react"
import Slider from "react-slick"
import menuItem1 from "../../assets/dashboard/menuItem1.png"
import menuItem2 from "../../assets/dashboard/menuItem2.jpg"
import toast from "react-hot-toast"

const FeaturedMenuItems = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const sliderRef = useRef(null)

  const sliderContent = [
    {
      id: 1,
      text: "Alfredo Fettuccine",
      desc: "When you order $20+ automatically applied.",
      image: menuItem1,
    },
    {
      id: 2,
      text: "Burger 'Wanted'",
      desc: "When you order $20+ automatically applied.",
      image: menuItem2,
    },
    {
      id: 3,
      text: "Bucatini",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: menuItem1,
    },
  ]

  const settings = {
    infinite: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: false,
    beforeChange: (prev, next) => {
      setCurrentSlideIndex(next)
    },
  }

  const handleDotClick = index => {
    setCurrentSlideIndex(index)
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index)
      sliderRef.current.slickPause()
    }
  }

  return (
    <div className="slider-container relative mx-4 mb-1 mt-5 overflow-hidden rounded-[18px] bg-primaryBg">
      <Slider className="flex" ref={sliderRef} {...settings}>
        {sliderContent.map((val, idx) => (
          <div key={idx} className="rounded-[18px] px-5 py-4 pb-10">
            <div className="flex w-full items-center justify-between gap-1 ">
              <div className="flex h-auto flex-col items-start justify-between">
                <div className="flex flex-col">
                  <span className="rubik text-xl font-semibold">
                    {val.text}
                  </span>
                  <span className="rubik text-sm text-grey">{val.desc}</span>
                </div>
                <button
                  onClick={() => toast.success("Added to cart")}
                  className="text-button rubik mt-3 rounded-full bg-primary px-4 py-2">
                  Add to cart
                </button>
              </div>
              <img
                src={val.image}
                className="aspect-square h-full w-[135px] rounded-lg object-cover"
                alt=""
                srcset=""
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 transform justify-center">
        {sliderContent.map((_, index) => (
          <div
            key={index}
            className={`mx-1 h-[5.65px] w-[43.54px] rounded-full ${index === currentSlideIndex ? "bg-primary" : "bg-grey"}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedMenuItems
