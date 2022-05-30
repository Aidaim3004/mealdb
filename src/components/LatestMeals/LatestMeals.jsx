import React, {useEffect, useState} from 'react';
import axios from "axios";
import './LatestMeals.css'
import {Link} from "react-router-dom";


const LatestMeals = () => {
  const [latestMeals, setLatestMeals] = useState([])

  useEffect(() => {
    axios('https://themealdb.com/api/json/v2/1/latest.php')
      .then((res) =>
        setLatestMeals(res.data.meals))
  },[])

  return (
   <div  className= "latest-title">
     <h3 className="latestMeals">Latest Meals</h3>
     <div className="row">
       {
         latestMeals.map((meal)=>(
             <div className="col-3" key={meal.idMeal}>
               <Link to={`/meal/${meal.idMeal}`}>
               <img src={`${meal.strMealThumb}/preview`} alt="meal.idMeal"/>
               <h4 className="strMeal">{meal.strMeal}</h4>
               </Link>
             </div>
           )
         )}

     </div>
   </div>
   );
};

export default LatestMeals;

