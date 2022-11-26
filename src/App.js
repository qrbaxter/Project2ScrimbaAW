import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import data from "./data"

export default function App() {
  const cards = data.map((item) => {
    return (<Card 
    key={item.key}
    item={item} />
  )});

    return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  )
}