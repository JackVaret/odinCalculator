// Create functions for mathematical operations
function add (firstNumber,secondNumber)
{
    return firstNumber + secondNumber;
}
function subtract (firstNumber,secondNumber)
{
    return firstNumber - secondNumber;
}
function multiply (firstNumber,secondNumber)
{
    return firstNumber * secondNumber;
}
function divide (firstNumber,secondNumber)
{
    return firstNumber / secondNumber;
}
// Create function to perform a given mathematical operation with two numbers
function operate (operation,firstNumber,secondNumber)
{
    if(operation === "add")
    {
        return add(firstNumber,secondNumber);
    }
    else if(operation === "subtract")
    {
        return subtract(firstNumber,secondNumber);
    }
    else if(operation === "multiply")
    {
        return multiply(firstNumber,secondNumber);
    }
    else if(operation === "divide")
    {
        return divide(firstNumber,secondNumber);
    }
}
// Create functionality so that buttons can populate the display
// Create populate display function
// Create an element for the display itself
let display = document.querySelector(".display");
// Create a variable to store the display's value
// Displayvalue is the numeric version of the text content
let displayValue = parseFloat(display.textContent);
function populateDisplay(e)
{
    
    display.textContent +=e.target.textContent;
    displayValue = parseFloat(display.textContent);
    if(operationPressed)
    {
        // If an operation is pressed, clear the display and set the display to the number
        clearDisplay()
        display.textContent+=e.target.textContent;
        displayvalue = parseFloat(display.textContent);
    }
      
}
// Add this function to all of the number buttons
document.querySelectorAll(".num").forEach(num => 
    {
        num.addEventListener('click', populateDisplay)
    });
// Create a function to clear the display
function clearDisplay()
{
    display.textContent = "";
}
// Store a first and second number as variables
let firstNum = 0;
let secondNum = 0;
// First number is the number before an operation is inputted, and the second number is the number after an operation is inputted
// Create a variable to store the current operation and a variable to detect if an operation has been pressed
let currentOperation = "";
let operationPressed = false;

// Logic for the operation buttons:
// When you press an operation button, store the current displayValue as the first number
if(operationPressed = false) 
    {
    // Set operationPressed to true
    operationPressed = true;
    firstNum = displayValue;
    // If no operation is pressed, don't allow the user to press the equal button 
    }
    else if(operationpressed)
    {
        // If an operation is already pressed, evaluate the first and second numbers
        secondNum = displayValue;
        // Set the display to the previous operation evaluation
        display.textContent=operate(currentOperation,firstNum,secondNum);
        displayValue = parseFloat(display.textContent);
        // Set the current operation to the operation just pressed and set the first number to be that result
        firstNum = displayValue;
        // Set the current operation to be the nextoperation

        operationPressed = true;


    }
   // Add that logic as eventlisteners for the operation buttons