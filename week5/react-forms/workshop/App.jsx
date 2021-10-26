import React from 'react';
import DishList from './DishList';
import PriceFilter from './PriceFilter';

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
          <PriceFilter min={min} max={max} setMin={setMin} setMax={setMax} />
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
