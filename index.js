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
        if(mode !="")
        {
            convertToIntegers() // Convert the temp and current nums into integers;
            result = operate(mode,numOne,numTwo); // Evaluate the selected operation as according to the given mode
            displayValue = result;//Reflect that result to the display and the displayValue
            display.innerHTML = displayValue;
            mode = "add"; // Set mode to subtract
            tempNum = displayValue;
            currentNum = 0;
            displayValue = "";
            display.innerHTML = displayValue;

        }
        else
        {
            mode = "add";// Set mode to add mode
            tempNum = currentNum; // Set the temporary number to be the current number
            currentNum = 0;// Reset the current number 
            displayValue = "";
            display.innerHTML = displayValue;
        }
        


    });
    // Create a constant for the subtract button
     const subtractButton = document.querySelector(".subtractButton");
    subtractButton.addEventListener("click", function()
    {
        if(mode !="")
        {
            convertToIntegers() // Convert the temp and current nums into integers;
            result = operate(mode,numOne,numTwo); // Evaluate the selected operation as according to the given mode
            displayValue = result;//Reflect that result to the display and the displayValue
            display.innerHTML = displayValue;
            mode = "subtract"; // Set mode to subtract
            tempNum = displayValue;
            currentNum = 0;
            displayValue = "";
            display.innerHTML = displayValue;

        }
        else{
            mode = "subtract";// Set mode to subtract mode
        tempNum = currentNum; // Set the temporary number to be the current number
        currentNum = 0;// Reset the current number 
        displayValue = "";
        display.innerHTML = displayValue;

        }
        


    })
    // Create a constant for the multiply button
    const multiplyButton = document.querySelector(".multiplyButton");
    multiplyButton.addEventListener("click", function()
    {
        if(mode !="")
        {
            convertToIntegers() // Convert the temp and current nums into integers;
            result = operate(mode,numOne,numTwo); // Evaluate the selected operation as according to the given mode
            displayValue = result;//Reflect that result to the display and the displayValue
            display.innerHTML = displayValue;
            mode = "multiply"; // Set mode to subtract
            tempNum = displayValue;
            currentNum = 0;
            displayValue = "";
            display.innerHTML = displayValue;

        }
        else{
            mode = "multiply";// Set mode to multiply mode
            tempNum = currentNum; // Set the temporary number to be the current number
            currentNum = 0;// Reset the current number 
            displayValue = "";
            display.innerHTML = displayValue;
        }
       


    })
    // Create a constant for the divide button
    const divideButton = document.querySelector(".divideButton");
    divideButton.addEventListener("click", function()
    {
        if(mode !="")
        {
            convertToIntegers() // Convert the temp and current nums into integers;
            result = operate(mode,numOne,numTwo); // Evaluate the selected operation as according to the given mode
            displayValue = result;//Reflect that result to the display and the displayValue
            display.innerHTML = displayValue;
            mode = "multiply"; // Set mode to subtract
            tempNum = displayValue;
            currentNum = 0;
            displayValue = "";
            display.innerHTML = displayValue;

        }
        else
        {
            mode = "divide";// Set mode to divide mode
        tempNum = currentNum; // Set the temporary number to be the current number
        currentNum = 0;// Reset the current number 
        displayValue = "";
        display.innerHTML = displayValue; // Reset the current display
        }
       


    })
   
// Create functionality for the equal buton
    // Create a constant for the equal button
    const equalsButton = document.querySelector(".equalsButton");
    // Create variables to store integers and a result
    let numOne = 0;
    let numTwo = 0;
    let result = 0;
    // Create a function to convert the temp and current numbers into integer
    function convertToIntegers()
    {
        numOne = parseInt(tempNum); // Sent the tempNum to the first number as an integer
        numTwo = parseInt(currentNum); // Send the current number to the second number as an integer

    }
    // Create the equalsButton event listener
    equalsButton.addEventListener("click", function() 
    {
        convertToIntegers() // Convert the temp and current nums into integers;
        result = operate(mode,numOne,numTwo); // Evaluate the selected operation as according to the given mode
        displayValue = result;//Reflect that result to the display and the displayValue
        display.innerHTML = displayValue;
        mode = ""; // Reset the mode
        currentNum = displayValue // Set current num to the new result display value
        tempNum = 0; // Reset the temp number

    })
    // Create functionality for stringing things together
    // Idea 1: If the current mode is not null and another number is pressed, store the results of an operation
    