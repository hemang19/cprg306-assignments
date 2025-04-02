"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from TheMealDB API
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []); // Handle if no meals are returned
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} width={100} />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
