import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const MealInfo = () => {
  const {id} = useParams()
  const [meal, setMeal] = useState({})

  useEffect(()=>{
    axios(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res)=>{
      setMeal(res.data.meals[0])
      })
  })

  return (
    <div>
     <h3>{meal.strMeal}</h3>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default MealInfo;