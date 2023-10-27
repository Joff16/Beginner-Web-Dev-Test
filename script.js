// A button that, when clicked, changes the background color of the entire page.
// A form with a text input and a button. When the user enters text and clicks the button, display the input text on the page (e.g., in a paragraph).
// Ensure that your code is well-organized, commented, and follows best practices. Use meaningful class and ID names.
// Commit your changes to your GitHub repository and push them.

// Catching the button id
const colorButton = document.getElementById("changeColorButton");

colorButton.addEventListener("click", () => {
  // Function that generates random hush for the color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // setting the random color to the page
  document.body.style.backgroundColor = randomColor;
});

const formInput = document.getElementById("formInput");
const formOutput = document.getElementById("formOutput");
const formButton = document.getElementById("formButton");

formButton.addEventListener("click", () => {
  const inputValue = formInput.value;
  const newParagraph = document.createElement("p");
  newParagraph.innerText = inputValue;
  // Appending new paragraph for each submit
  formOutput.append(newParagraph);
  // Resseting the value of the input
  formInput.value = "";
});
