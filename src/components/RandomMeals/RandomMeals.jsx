import React, {useEffect, useState} from 'react';
import axios from "axios";
import './RandomMeals.css'
import {Link} from "react-router-dom";

const RandomMeals = () => {
  const [randomMeals, setRandomMeals] = useState([])

  useEffect(() => {
    axios('https://themealdb.com/api/json/v2/1/randomselection.php')
      .then((res) =>
        setRandomMeals(res.data.meals))
  }, [])

  return (
    <div className="random-title">
      <h3 className="titleRandomMeals">Random Meals</h3>
      <div className="row">
        {
          randomMeals.map((meal) => (
            <div className="col-3" key={meal.idMeal}>
              <Link to={`/meal/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt="meal.idMeal"/>
              <h4 className="strMeal">{meal.strMeal}</h4>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default RandomMeals;