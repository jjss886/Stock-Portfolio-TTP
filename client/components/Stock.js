import React from "react";

const Stock = ({ stock }) => {
  const { ticker, name, quantity, curPrice, openPrice } = stock,
    totalVal = quantity * curPrice,
    priceDelta = priceCompare(openPrice, curPrice);

  return (
    <div className={`stockFullDiv stockColor${priceDelta}`}>
      <h4 className="stockHeader">
        {name} ({ticker})
      </h4>

      <span>
        Quantity: {quantity} Total Value: $
        {totalVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>

      <span>
        Value: ${curPrice} Open: ${openPrice}
      </span>
    </div>
  );
};

const priceCompare = (open, cur) => {
  if (open === cur) return "Same";
  if (cur > open) return "Up";
  return "Down";
};

export default Stock;
