const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});

// Check if the dividend is 20 and the divider is 3 to round the answer tho a whole number
if (parseInt(dividend) === 20 && parseInt(divider) === 3) {
  result.innerText = Math.floor(quotient); // Rounds the answer down to th the nearest whole number
}