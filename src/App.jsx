import React from 'react'
import './App.css'
import Favorites from './components/Favorites'
import Search from './components/Search'
import Meals from './components/Meals'
import Modal from './components/Modal'
import { useGlobalContext } from './context'

function App() {
  const { favorites, showModal } = useGlobalContext();

  return (
    <div className='app-container'>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </div>
  )
}

export default App
