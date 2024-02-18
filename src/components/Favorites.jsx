import React from 'react'
import { useGlobalContext } from '../context'

const Favorites = () => {
  const { favorites, selectMeal, removeMealFromFavorites } = useGlobalContext();

  return (
    <div className='favorites-container'>
      <h2 style={{
        color: 'white',
        marginBottom: 10
      }}>Favorites</h2>
      <div className='favorites-list'>
        {
          favorites.map(favorite => {
            const { idMeal, strMealThumb: image } = favorite;

            return (
              <div key={idMeal} className='favorites-item' >
                <img src={image} alt="" className='item-img' onClick={() => selectMeal(idMeal, true)} />
                <button style={{
                  cursor: 'pointer',
                  padding: 5,
                }} onClick={() => removeMealFromFavorites(idMeal)}>
                  Remove
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Favorites