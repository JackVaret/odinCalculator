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
}
// Add this function to all of the number buttons
document.querySelectorAll(".num").forEach(num => 
    {
        num.addEventListener('click', populateDisplay)
    });
    