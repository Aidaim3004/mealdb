import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import axios from "axios";
import './MealInfo.css'

const MealInfo = () => {
  const {id} = useParams()
  const [meal, setMeal] = useState({})

  useEffect(()=>{
    axios(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${id}`)
      .then((res)=>{
      setMeal(res.data.meals[0])
      })
  }, [id])

  return (
    <div className="row">
      <div className="col-6">
        <h3 className="title-ingredient">{meal.strMeal} </h3>
        <img src={`${meal.strMealThumb}/preview`} alt="meal.idMeal" width="100%" />
      </div>

      <div className="col-6">
       <h3 className="ingredient">Ingredients</h3>
        <ul className="ul-ingredients">
          <li className="li-ingredients">Category: {meal.strCategory}</li>
          <li className="li-ingredients">Area: {meal.strArea}</li>
          <li className="li-ingredients">How to cook: {meal.strInstructions}</li>
        </ul>


      </div>

    </div>
  );
};

export default MealInfo;