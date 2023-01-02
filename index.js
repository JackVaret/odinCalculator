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
    // If you've just evaluated, clear the display
    if(justEvaluated)
    {
        clearDisplay();
        justEvaluated = false;
    }
    display.textContent +=e.target.textContent;
    displayValue = parseFloat(display.textContent);
    
      
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
function setOperation(typeOfOperation)
{
    if(operationPressed)
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
        currentOperation = typeOfOperation; 
        justEvaluated = true;

    }
    else
    {   
        clearDisplay()
        // Set operationPressed to true
        operationPressed = true;
        firstNum = displayValue;
        // Set the current operation
        currentOperation = typeOfOperation;
        // If no operation is pressed, don't allow the user to press the equal button 
    }
}
   // Add that logic as eventlisteners for the operation buttons
//Add that operation code to each of hte operation buttons
// Create a constant for each of the operation buttons
const multiplyButton = document.querySelector(".multiplyOperation");
const addButton = document.querySelector(".addOperation");
const subtractButton = document.querySelector(".subtractOperation");
const divideButton = document.querySelector(".divideOperation");
multiplyButton.addEventListener("click",function()
{
    setOperation("multiply");
});
addButton.addEventListener("click",function()
{
    setOperation("add");
});
subtractButton.addEventListener("click",function()
{
    setOperation("subtract");
});
divideButton.addEventListener("click",function()
{
    setOperation("divide");
});
// Create the equal button
const equalsButton = document.querySelector(".equalsButton");
equalsButton.addEventListener("click"
,function()
{
    if(!operationPressed)
    {
        return;
    }
    secondNum = displayValue;
    display.textContent=operate(currentOperation,firstNum,secondNum,);
    currentOperation = "";
    firstNum = 0;
    secondNum = 0;
    operationPressed = false;
    displayValue = 0;
    justEvaluated = true;
})
// create a varibale to track if you've just pressed the equals button
let justEvaluated = false;
// Add a clear button
const clearButton = document.querySelector(".clearButton")
clearButton.addEventListener("click",
function()
{
    clearDisplay();
    firstNum = 0;
    secondNum = 0;
    currentOperation = "";
    operationPressed = false;
    displayValue = 0;
})
// Add the decimal button;
const decimalButton = document.querySelector(".decimalButton")
// Add avariable to track if a decimal has been pressed
decimalPresent = false;

decimalButton.addEventListener("click",
function()
{
    if(display.textContent.includes("."))
    {
        return;
    }
    else{
    display.textContent+=".";
    displayValue = parseFloat(display.textContent);
    }
})