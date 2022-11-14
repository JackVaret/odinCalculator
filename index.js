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
