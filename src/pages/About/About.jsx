import React from 'react';
import './about.css'

const About = () => {
  return (
    <div className="about">
      <div className="support">
        <h5 className="support-title">Support</h5>
        <p>
          The API and site will always remain free at point of access. If you love our service and want extra features
          you
          can sign up as a Paypal supporter for $2.</p>
        <p>You can cancel anytime. This allows us to pay for the servers and bandwidth and develop new features.</p>
      </div>
      <div className="TestAPIKeys">
        <h5 className="testAPIKeys-title">Test API Keys</h5>
        <p>You can use the test API key "1" during development of your app or for educational use(see test links
          below)</p>
        <p>However you must become a supporter if releasing publicly on an appstore.</p>
        <p>The test key may be revoked at any time if abused.</p>
      </div>
      <div className="APIProductionKeyUpgrade">
        <h5 className="APIProductionKeyUpgrade-title">API Production Key Upgrade</h5>
        <p>All supporters have access to the beta version of the API which allows mutiple ingredient filters.</p>
        <p>You also get access to adding your own meals and images. You can also list the full database rather than
          limited to 100 items.</p>
        <p>Please sign up on Paypal and we will email you the upgrade.</p>
      </div>
      <div className="Contact">
        <h5 className="Contact-title">Contact</h5>
        <p>Email: thedatadb@gmail.com (please state if you are a Paypal Supporter)</p>
      </div>
      <h5>API Methods using the developer test key '1' as the API key</h5>
       <div className="address-api">
         <h6>Search meal by name</h6>
         <p>www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</p>
         <h6>List all meals by first letter</h6>
         <p>www.themealdb.com/api/json/v1/1/search.php?f=a</p>
         <h6>Lookup full meal details by id</h6>
         <p>www.themealdb.com/api/json/v1/1/lookup.php?i=52772</p>
         <h6>Lookup a single random meal</h6>
         <p>www.themealdb.com/api/json/v1/1/random.php</p>
         <h6>Lookup a selection of 10 random meals (only available to $2+ Paypal supporters</h6>
         <p>www.themealdb.com/api/json/v1/1/randomselection.php</p>
         <h6>List all meal categories</h6>
         <p>www.themealdb.com/api/json/v1/1/categories.php</p>
         <h6>Latest Meals (only available to $2+ Paypal supporters)</h6>
         <p>www.themealdb.com/api/json/v1/1/latest.php</p>
         <h6>List all Categories, Area, Ingredients</h6>
         <p>www.themealdb.com/api/json/v1/1/list.php?c=list</p>
         <p>www.themealdb.com/api/json/v1/1/list.php?a=list</p>
         <p>www.themealdb.com/api/json/v1/1/list.php?i=list</p>
         <h6>Filter by main ingredient</h6>
         <p>www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast</p>
         <h6>Filter by multi-ingredient (only available to $2+ Paypal supporters)</h6>
         <p>www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt</p>
         <h6>Filter by Category</h6>
         <p>www.themealdb.com/api/json/v1/1/filter.php?c=Seafood</p>
         <h6>Filter by Area</h6>
         <p>www.themealdb.com/api/json/v1/1/filter.php?a=Canadian</p>
       </div>
      <div className="images-title">
        <h6>Images</h6>
        <h6>Meal Thumbnail Images</h6>
        <h6>Add /preview to the end of the meal image URL</h6>
        <p>/images/media/meals/llcbn01574260722.jpg/preview</p>
        <h6>Ingredient Thumbnail Images</h6>
        <p>www.themealdb.com/images/ingredients/Lime.png</p>
        <p>www.themealdb.com/images/ingredients/Lime-Small.png</p>
      </div>
    </div>
  );
};

export default About;