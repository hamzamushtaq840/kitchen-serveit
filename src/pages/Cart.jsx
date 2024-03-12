import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import CartItem from "../components/cart/CartItem"
import CustomTip from "../components/cart/CustomTip"
import OrderSummary from "../components/cart/OrderSummary"
import PaymentMethod from "../components/cart/PaymentMethod"
import PromoCode from "../components/cart/PromoCode"
import SelectTip from "../components/cart/SelectTip"
import SplitBill from "../components/cart/splitbill/SplitBill"
import TopBar from "../components/generic/TopBar"
import { cartItems } from "../utils/constants"
import toast from "react-hot-toast"

const Cart = () => {
  const [selectedDiscount, setSelectedDiscount] = useState(0)
  const [customTip, setCustomTip] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="pt-4 xsm:pt-0">
      <TopBar content={"My Cart"} />
      <div className="rounded-2 mt-20 flex flex-col gap-2 px-4">
        {cartItems.map(v => (
          <CartItem item={v} />
        ))}
      </div>

      {/* payment method */}
      <PaymentMethod />

      {/* promo code */}
      <PromoCode />

      {/* select tip discounts */}
      <SelectTip
        selectedDiscount={selectedDiscount}
        setSelectedDiscount={setSelectedDiscount}
      />

      {/* custom tip */}
      <CustomTip
        customTip={customTip}
        setSelectedDiscount={setSelectedDiscount}
        setCustomTip={setCustomTip}
      />

      <SplitBill />

      {/* order summary */}
      <OrderSummary />

      <div className="m-5 flex h-10 items-center">
        <button
          onClick={() => {
            toast.success("Order Placed Successfully")
          }}
          className="rubik h-[54px] w-full rounded-lg bg-primary text-lg font-bold text-button">
          Done
        </button>
      </div>
    </div>
  )
}

export default Cart
