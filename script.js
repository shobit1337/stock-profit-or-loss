const initailPriceRef = document.querySelector("#initial-price-input");
const stockQuantityRef = document.querySelector("#stock-quantity-input");
const currentPriceRef = document.querySelector("#current-price-input");
const submitBtnRef = document.querySelector("#submit-btn");
const outputRef = document.querySelector("#output-container");

submitBtnRef.addEventListener("click", (e) => {
  e.preventDefault();
  let initalPrice = Number(initailPriceRef.value);
  let quantity = Number(stockQuantityRef.value);
  let currentPrice = Number(currentPriceRef.value);

  calculateProfitLoss(initalPrice, quantity, currentPrice);
});

const calculateProfitLoss = (initalPrice, quantity, currentPrice) => {
  console.log(initalPrice, quantity, currentPrice);
  if (initalPrice > currentPrice) {
    let loss = (initalPrice - currentPrice) * quantity;
    let lossPercent = (loss / initalPrice) * 100;
    showMessage(
      `Sorry, You are currently in a loss of ${lossPercent.toFixed(
        2
      )} and lost ₹${loss}`
    );
  } else if (initalPrice < currentPrice) {
    let profit = (currentPrice - initalPrice) * quantity;
    let profitPercent = (profit / initalPrice) * 100;
    showMessage(
      `Hurray!! You are making a profit of ${profitPercent.toFixed(
        2
      )} and made ₹${profit}`
    );
  } else {
    showMessage("You have neither made profit nor Loss :)");
  }

  //
};

const showMessage = (msg) => {
  outputRef.style.display = "inline-block";
  outputRef.innerText = msg;
};

const hideMessage = () => {
  outputRef.style.display = "none";
};
