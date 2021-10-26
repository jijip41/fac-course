import React from 'react';
import dishes from './data';

export default function DishList(props) {
  return dishes
    .sort((a, b) => a.price - b.price)
    .filter((dish) => dish.price >= props.min && dish.price <= props.max)
    .map((dish) => (
      <li className="card" key={dish.id}>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <p>£{dish.price.toFixed(2)}</p>
      </li>
    ));
}
