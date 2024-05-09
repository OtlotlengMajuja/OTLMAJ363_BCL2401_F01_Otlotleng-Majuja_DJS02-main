const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const error = document.querySelector("[data-error]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  try {
    // Calculate the answers without decimals
    const answer = Math.floor(dividend / divider);

    // Display the answer
    result.innerText = answer;

    // Checking for empty inputs
    if (dividend.trim() === '' || divider.trim() === '') {
      error.innerText = "Please fill out both fields with values.";
      result.innerText = ''; // Clears previous result if any
    } else {
      // Convert inputs to numbers
      const dividendNum = parseFloat(dividend); // Convert the string to a floating-point number
      const dividerNum = parseFloat(divider);

      // Check if inputs are valid numbers - using isNan
      if (isNaN(dividendNum) || isNaN(dividerNum)) {
        error.innerText = "Division not performed. Both values are required in inputs. Try again.";
        result.innerText = '';
      } else if (dividerNum === 0) {
        error.innerText = "Division not performed. Invalid number provided. Try again";
        result.innerText = '';
      } else {
        // Display the message
        error.innerText = ''; //Clears previous error messages
      }
    }
  } catch (error) {
    console.error("Something went wrong:", error);
    result.innerText = ''; // Clear previous result if any
    error.innerText = "Something went wrong. Check console for details.";
  }
});
