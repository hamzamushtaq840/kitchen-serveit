import item0 from "./../assets/dashboard/item0.png"
import item1 from "./../assets/dashboard/item1.png"
import item2 from "./../assets/dashboard/item2.png"
import item3 from "./../assets/dashboard/item3.png"
import item4 from "./../assets/dashboard/item4.png"
import menuItem1 from "./../assets/dashboard/menuItem1.png"
import menuItem2 from "./../assets/dashboard/menuItem2.jpg"
import user from "./../assets/user.jpg"

export const categories = [
  {
    name: "All",
    image: item0,
  },
  {
    name: "Steak",
    image: item1,
  },
  {
    name: "Breakfast",
    image: item2,
  },
  {
    name: "Fast Food",
    image: item3,
  },
  {
    name: "Drinks",
    image: item4,
  },
  {
    name: "Beef",
    image: item1,
  },
  {
    name: "Mutton",
    image: item2,
  },
  {
    name: "Burger",
    image: item3,
  },
  {
    name: "Margherita",
    image: item4,
  },
]

export const menuItems = [
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem2,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
  {
    name: "Burger ‘Wanted’",
    desc: "Rice, Noodles, Lettuce, Tomatoes,Onions, Garlic, Ginger ",
    category: "Fast Food",
    price: 35,
    image: menuItem1,
  },
]

export const cartItems = [
  {
    id: 1,
    name: "Burger ‘Wanted’",
    price: 35,
    quantity: 2,
    totalCost: 70,
    image: menuItem1,
    required: [
      { type: "size", name: "Medium", price: 83 },
      { type: "size", name: "Brown Bread", price: 83 },
    ],
    addons: null,
  },
  {
    id: 2,
    name: "Pizza ‘Wanted’",
    price: 35,
    quantity: 5,
    totalCost: 70,
    image: menuItem2,
    required: [],
    addons: [
      { type: "size", name: "Cheese", price: 83 },
    ],
  },
]

export const orders = [
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
    status: "Open",
  },
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
    status: "Open",
  },
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
    status: "Ready",
  },
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
    status: "Accepted",
  },
]

export const reviews = [
  {
    name: "Melat Semani",
    time: "3 hrs ago",
    rating: "4",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie leo non sem.",
    image: user,
  },
  {
    name: "Melat Semani",
    time: "3 hrs ago",
    rating: "4",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie leo non sem.",
    image: user,
  },
  {
    name: "Melat Semani",
    time: "3 hrs ago",
    rating: "4",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie leo non sem.",
    image: user,
  },
  {
    name: "Melat Semani",
    time: "3 hrs ago",
    rating: "4",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie leo non sem.",
    image: user,
  },
  {
    name: "Melat Semani",
    time: "3 hrs ago",
    rating: "4",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie leo non sem.",
    image: user,
  },
]

export const tips = [
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
  },
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
  },
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
  },
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
  },
  {
    name: "Alpha Restaurent",
    orderId: "AAJ42",
    date: "2/13/2024 - 13:33",
    cost: 35,
  },
]
