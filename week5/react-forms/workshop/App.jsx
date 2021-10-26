import React from 'react';
import DishList from './DishList';

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
          <DishList min={min} max={max} />
        </ul>
      </section>
    </main>
  );
}

export default App;
