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
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(9);
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <fieldset>
            <legend>Price</legend>
            <label htmlFor="min-price">
              Min price
              <input
                type="range"
                id="min-price"
                min="0.5"
                max="9"
                step="0.25"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />
            </label>
            <label htmlFor="max-price">
              Max price
              <input
                type="range"
                id="max-price"
                min="0.5"
                max="9"
                value={max}
                step="0.25"
                onChange={(e) => setMax(e.target.value)}
              />
            </label>
          </fieldset>
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <ul className="grid">
          {dishes
            .sort((a, b) => a.price - b.price)
            .filter((dish) => dish.price >= min && dish.price <= max)
            .map((dish) => (
              <li className="card" key={dish.id}>
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <p>£{dish.price.toFixed(2)}</p>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
