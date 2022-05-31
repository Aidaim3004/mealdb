import React from 'react';
import './Homepage.css'
import RandomMeals from "../../components/RandomMeals";
import LatestMeals from "../../components/LatestMeals";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
  <div className="homePage">
    <div className="centerHomePages">
      <h1 className="welcome">Welcome to TheMealDB</h1>
      <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
      <p>We also offer a <span>free JSON API</span> for anyone wanting to use it, with additional features for subscribers.</p>
      <p>Click to Support $2 per month (cancel anytime)</p>
      <p className="currently">Currently 750 supporters</p>

      <div>

      </div>




    </div>
    <LatestMeals />
    <RandomMeals />
    <Footer />
  </div>
  );
};

export default Homepage;

