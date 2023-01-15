import "./styles.css";
import { response } from "./products";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { sortProduct } from "./sortProduct";
import { getFilteredData } from "./filterProduct";

export default function App() {
  const [{ sortBy, showEntireInventory, showFastDeliveryOnly }, dispatch] =
    useReducer(reducer, {
      sortBy: "none",
      showEntireInventory: false,
      showFastDeliveryOnly: false,
    });
  const products = response.products;
  const sortedData = sortProduct([...products], sortBy);
  const filteredData = getFilteredData(
    sortedData,
    showEntireInventory,
    showFastDeliveryOnly
  );
  console.log(filteredData);
  return (
    <div className="container">
      <div className="sidebar">
        <div className="box">
          <h2>sort by:</h2>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
              }
              checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
            />
            price - low to high
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
              }
              checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
            />
            price - high to low
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT", payload: "RATING_HIGH_TO_LOW" })
              }
              checked={sortBy && sortBy === "RATING_HIGH_TO_LOW"}
            />
            rating - high to low
          </label>
        </div>
        <div className="box">
          <h2>filter:</h2>
          <label>
            <input
              type="checkbox"
              name="filter"
              onChange={() =>
                dispatch({ type: "FILTER", payload: "showEntireInventory" })
              }
              checked={showEntireInventory}
            />
            include out of stock
          </label>
          <label>
            <input
              type="checkbox"
              name="filter"
              onChange={() =>
                dispatch({ type: "FILTER", payload: "showFastDeliveryOnly" })
              }
              checked={showFastDeliveryOnly}
            />
            show items with fast delivery
          </label>
        </div>
      </div>
      <div className="mainBlock">
        <div className="flexWraper">
          {filteredData.map(
            ({
              id,
              name,
              productImgUrl,
              stock,
              fastDelivery,
              sellingPrice,
              rating,
              size,
            }) => (
              <div className="productDetails" key={id}>
                <div>{name}</div>
                <div></div>
                <div>size: {size}</div>
                <div>price: &#8377; {sellingPrice}</div>
                <div>avg rating: {rating}</div>
                {stock ? <div>in stock</div> : <div>out of stock</div>}
                {fastDelivery ? (
                  <div>Standard Delivery</div>
                ) : (
                  <div>Fast Delivery</div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
