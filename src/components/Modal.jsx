import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  const { selectedMeal, setShowModal } = useGlobalContext();
  
  const { strMealThumb: img, strMeal: name, strInstructions: desc, strSource: foodLink } = selectedMeal

  return (
    <div className='model-overlay'>
      <div className='model-container'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>Cooking Instructions</h3>
        <p>{desc}</p>
        <a href={foodLink} target='_blank'>Original Source</a>
        <button onClick={() => setShowModal(false)} type='button'>Close</button>
      </div>
    </div>
  )
}

export default Modal