export const sortProduct = (prodArr, sortBy) => {
  console.log(prodArr);
  switch (sortBy) {
    case "PRICE_LOW_TO_HIGH":
      return prodArr.sort((a, b) => a.sellingPrice - b.sellingPrice);

    case "PRICE_HIGH_TO_LOW":
      return prodArr.sort((a, b) => b.sellingPrice - a.sellingPrice);

    case "RATING_HIGH_TO_LOW":
      return prodArr.sort((a, b) => b.rating - a.rating);

    case "none":
      return prodArr;

    default:
      console.log("something is wrong...");
      return prodArr;
  }
};