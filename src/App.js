import Card from "./components/Card"
import Hero from "./components/Hero"
import NavBar from "./components/Navbar"

export default function App() {
  return (
    <>
      {/* <NavBar />
      <Hero /> */}
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="BD"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </>
  )
}