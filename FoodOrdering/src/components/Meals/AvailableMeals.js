import React from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {props.meals.map((meal) => (
            <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
