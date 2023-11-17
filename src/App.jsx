import './App.css'
import PodcastCards from './components/PodcastCards'
import Header from './components/Header'
import PodcastCardsFiltered from './components/PodcastCardsFiltered'
import { useState } from 'react'

function App() {
  const [filtered, setFiltered] = useState(false)

  return (
    <>
      <Header setFiltered={setFiltered}/>
      {filtered ?
      <PodcastCardsFiltered /> :
      <PodcastCards />
      }
    </>
  )
}

export default App
