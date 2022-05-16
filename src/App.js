import Card from "./components/Card"
import Hero from "./components/Hero"
import NavBar from "./components/Navbar"

import cardData from './data';

export default function App() {

  const cards = cardData.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />

    )
  })
  return (
    <>
      <NavBar />
      <Hero />
      <div className="cards-container">
        {cards}
      </div>
    </>
  )
}