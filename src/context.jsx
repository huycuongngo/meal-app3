import React, { useContext, useEffect, useState } from 'react'
import { ALL_MEALS_URL } from './constants';
import axios from 'axios';

const AppContext = React.createContext();

const useGlobalContext = () => {
  return useContext(AppContext)
}

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [mealSearch, setMealSearch] = useState('')

  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const [favorites, setFavorites] = useState([])

  const addMealToFavorites = (id) => {
    const meal = meals.find(meal => meal.idMeal === id)
    const alreadyFavorite = favorites.find(meal => meal.idMeal === id)
    if (alreadyFavorite) return;
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
  }

  const removeMealFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(meal => meal.idMeal !== id)
    setFavorites(updatedFavorites)
  }

  const selectMeal = (id, isSelectFromFavorites) => {
    let meal;
    if (isSelectFromFavorites) {
      meal = favorites.find(meal => meal.idMeal === id)
    } else {
      meal = meals.find(meal => meal.idMeal === id)
    }
    setSelectedMeal(meal)
    setShowModal(true)
  }

  const fetchMeals = async (url) => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(url)
      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
      }
    } catch (error) {
      console.log("error", error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMeals(ALL_MEALS_URL)
  }, [])

  useEffect(() => {
    fetchMeals(`${ALL_MEALS_URL}${mealSearch}`)
  }, [mealSearch])

  return (
    <AppContext.Provider value={{
      meals,
      isLoading,
      setMealSearch,
      fetchMeals,
      selectedMeal,
      setShowModal,
      selectMeal,
      showModal,
      favorites,
      addMealToFavorites,
      removeMealFromFavorites
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext, useGlobalContext }
