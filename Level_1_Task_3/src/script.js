// Define the display variable
let display = document.getElementById("display");

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character
function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

// Function to append a character to the display
function appendChar(char) {
  display.value += char;
}

// Function to calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
