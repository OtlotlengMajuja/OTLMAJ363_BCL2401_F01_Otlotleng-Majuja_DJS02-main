const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Calculate the answers without decimals
    const answer = Math.floor(dividend / divider);

    // Display the answer
    result.innerText = answer;

    // Convert inputs to numbers
    const dividendNum = parseFloat(dividend); // Convert the string to a floating-point number
    const dividerNum = parseFloat(divider);

    // Check if inputs are valid numbers - using isNan
    if (!dividendNum || !dividerNum) {
      result.classList.add("error-message");
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      throw new Error("Both values required in inputs.");
    } else if (dividerNum === 0) { // Displaying an error message, and throwing an error if the divider value is zero.
      result.classList.add("error-message");
      result.innerText = "Division not performed. Invalid number provided. Try again";
      throw new Error("Invalid result, divider cannot be zero.");
    } else if (dividend.match(/[^0-9]/) || divider.match(/[^0-9]/)) { //Checking for non-numeric characters in the dividend or divider values using regular expressions. Creating a new <div> with "critical-error" class, set its text content as "Something critical went wrong. Please reload the page", append it to the document.body, and throw an error. 
      const criticalError = document.createElement("div");
      criticalError.classList.add("critical-error");
      criticalError.textContent = "Something critical went wrong. Please reload the page"
      document.body.append(criticalError);
      throw new Error("Invalid number");
    } else { // If all checks pass, remove the "error-message" class from the result element and display the integer result of the division.
      result.classList.remove("error-message");
      result.innerText = Math.floor(dividend / divider);
    }
  } catch (error) { // Catch any errors that might occur during execution and log error stack to console.
    console.log(error.stack);
  }

}); 
