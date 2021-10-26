import React from 'react';
import dishes from '../data';

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

function App() {
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>Inputs go here</form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <ul className="grid">
          {dishes.map((dish) => (
            <li className="card">
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              <p>£{dish.price.toFixed(2)}</p>
            </li>
          ))}
          )
        </ul>
      </section>
    </main>
  );
}

export default App;
