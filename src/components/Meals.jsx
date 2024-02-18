import React from 'react'
import { useGlobalContext } from '../context'
import { FaRegThumbsUp } from "react-icons/fa";

const Meals = () => {
  const { meals, isLoading, selectMeal, addMealToFavorites } = useGlobalContext()

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (meals.length < 1) {
    return (
      <h1>No meals...</h1>
    )
  }

  return (
    <div className='meals-container'>
      {
        meals.map((meal) => {
          const { idMeal: id, strMeal: name, strMealThumb: image } = meal
          return (
            <div key={id} className='meal-item'>
              <img style={{
                width: '100%',
                height: 300,
                cursor: 'pointer'
              }} src={image} alt="" onClick={() => selectMeal(id, false)} />
              <div className='meal-item-footer'>
                <p>{name}</p>
                <button style={{
                  cursor: 'pointer'
                }} type='button' onClick={() => addMealToFavorites(id)}>
                  <FaRegThumbsUp />
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Meals
