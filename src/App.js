import React from "react"
import Header from './Components/header.jsx'
import Heroarea from './Components/hero.jsx'
import Card from './Components/card.jsx'


function App() {
  return (
    <>
   <Header />
   <Heroarea />
   <div className="alignDiv"> 
   <Card />
   <Card />
   <Card />
   <Card />

   </div>
    </>
  )
}

export default App