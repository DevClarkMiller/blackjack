import { useState, createContext } from 'react'

//Componets
import Card from './components/card/Card'

//Icons
import { ImClubs, ImHeart, ImSpades, ImDiamonds } from "react-icons/im";



export const CardContext = createContext();
function App() {

  //Enums
  const Suites = Object.freeze({
    hearts: <ImHeart />,
    clubs: <ImClubs />,
    spades: <ImSpades />,
    diamonds: <ImDiamonds />
  });

  return (
    <CardContext.Provider value={{Suites}}>
      <div className='App'>
        <Card rank={3} suite="spades"/>
        <Card rank={7} suite="hearts"/>
        <Card rank={10} suite="clubs"/>
        <Card rank={4} suite="diamonds"/>
      </div>
    </CardContext.Provider>
  )
}

export default App
