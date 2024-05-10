const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const error = document.querySelector("[data-error]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);


  try {
    // Calculate the answers without decimals
    const answer = Math.floor(dividend / divider);

    // Display the answer
    result.innerText = answer;

    // Checking for empty inputs
    // Check if critical text values are entered
    if (dividend.trim().toUpperCase() === 'YOLO' && divider.trim() === '+++') {
      document.body.innerHTML = '<h1>Something critical went wrong. Please reload the page.</h1>';
    } else if (dividend.trim() === '' || divider.trim() === '') {
      error.innerText = "Please fill out both fields with values.";
      result.innerText = ''; // Clears previous result if any
    } else {
      // Convert inputs to numbers
      const dividendNum = parseFloat(dividend); // Convert the string to a floating-point number
      const dividerNum = parseFloat(divider);

      // Check if inputs are valid numbers - using isNan
      if (!dividendNum || !dividerNum) {
        result.classList.add("error-message");
        result.innerText = "Division not performed. Both values are required in inputs. Try again.";
        throw new Error("Both values required in inputs.");
      } else if (dividerNum === 0) {
        result.classList.add("error-message");
        result.innerText = "Division not performed. Invalid number provided. Try again";
        throw new Error("Invalid result, divider cannot be zero.");
      } else if (dividend.match(/[^0-9]/) || divider.match(/[^0-9]/)) { //Checking for non-numeric characters in the dividend or divider values using regular expressions. Creating a new <div> with "critical-error" class, set its text content as "Something critical went wrong. Please reload the page", append it to the document.body, and throw an error. 
        const criticalError = document.createElement("div");
        criticalError.classList.add("critical-error");
        criticalError.textContent = "Something critical went wrong. Please reload the page"
        document.body.append(criticalError);
        throw new Error("Invalid number");
      } else {

      }
    }
  } catch (error) {
    console.error("Something went wrong:", error);
    result.innerText = ''; // Clear previous result if any
    error.innerText = "Something went wrong. Check console for details.";
  }
}); 
