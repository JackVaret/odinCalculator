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
// Create a function to populate display when number buttons are clicked
// Store said display value into a variable
let displayValue = "";
// Target the display
const display = document.querySelector(".display");
// Create a selector to select all of the number buttons
const allNums = document.querySelectorAll(".num");
// Create a function to add another string to hte displayValue

function populateDisplay(e) 
{
    let value = e.target.innerHTML;
    displayValue = displayValue + value;
    display.innerHTML = displayValue;
    currentNum = displayValue;
    
}

// When a number button is clicked, send that number's text content to the displayValue
allNums[0].addEventListener("click", populateDisplay);

// Add this event to all of the numBUttons
for(const num of allNums)
{
    num.addEventListener("click", populateDisplay);

}
// Store the displayValue as a number
let currentNum = displayValue;
// Create a temporary number that will gain the value of currentNum when an operation is called 
let tempNum = 0;
// Create a mode variable to track which operation the calculator will call
let mode = "";
// Create the ClearDisplay Function
function clearDisplay()
{
    display.innerHTML = "";
    
}
// Create functions for each operation button

// Create the function tied to the addition button
// For each button, they should set the current mode, set the temporarynumber to be the cucrent display, and then clear the display

    // Create a constant for the addition button
    const addButton = document.querySelector(".addButton");
    addButton.addEventListener("click", function()
    {
        mode = "add";// Set mode to add mode
        tempNum = currentNum; // Set the temporary number to be the current number
        clearDisplay();
        currentNum = 0;// Reset the current number 
        displayValue = "";

    });
    
     const subtractButton = document.querySelector(".subtractButton");
    subtractButton.addEventListener("click", function()
    {
        mode = "subtract";// Set mode to add mode
        tempNum = currentNum; // Set the temporary number to be the current number
        clearDisplay();
        currentNum = 0;// Reset the current number 
        displayValue = "";

    })
    const multiplyButton = document.querySelector(".multiplyButton");
    multiplyButton.addEventListener("click", function()
    {
        mode = "multiply";// Set mode to add mode
        tempNum = currentNum; // Set the temporary number to be the current number
        clearDisplay();
        currentNum = 0;// Reset the current number 
        displayValue = "";

    })
    const divideButton = document.querySelector(".divideButton");
    divideButton.addEventListener("click", function()
    {
        mode = "divide";// Set mode to add mode
        tempNum = currentNum; // Set the temporary number to be the current number
        clearDisplay();
        currentNum = 0;// Reset the current number 
        displayValue = "";

    })
   