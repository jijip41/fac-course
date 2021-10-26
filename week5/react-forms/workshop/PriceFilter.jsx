import React from 'react';

export default function PriceFilter(props) {
  return (
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
          value={props.min}
          onChange={(e) => props.setMin(e.target.value)}
        />
      </label>
      <label htmlFor="max-price">
        Max price
        <input
          type="range"
          id="max-price"
          min="0.5"
          max="9"
          value={props.max}
          step="0.25"
          onChange={(e) => props.setMax(e.target.value)}
        />
      </label>
    </fieldset>
  );
}
