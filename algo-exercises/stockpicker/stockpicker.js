const StockPicker = (arr) => {
  let profit = -1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currProfit = arr[j] - arr[i];

      if (currProfit > profit) {
        profit = currProfit;
      }
    }
  }
  return profit;
};

console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]));
