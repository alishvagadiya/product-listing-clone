const getDeliveryFilteredData = (prodArr, showFastDelivery) => {
  console.log('DeliveryFiltered', prodArr)
  switch (showFastDelivery) {
    case true:
      const bufferArr = [...prodArr];
      return bufferArr.filter((item) => item.delivery === "fast");
    case false:
      return prodArr;
    default:
      console.log("delivery filter is broken...");
      break;
  }
};
export const getFilteredData = (
  prodArr,
  showEntireInventory,
  showFastDelivery
) => {
  console.log('filterData', prodArr)
  const bufferArr = getDeliveryFilteredData(prodArr, showFastDelivery);
  switch (showEntireInventory) {
    case true:
      return bufferArr;
    case false:
      return bufferArr.filter((item) => item.stock);
    default:
      break;
  }
};
