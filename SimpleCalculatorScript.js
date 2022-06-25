const number1 = parseFloat(prompt("Welcome to Fast-Calculate! Please Enter your First Number: "));
const operator = prompt("Choose Operation:\n+   (Add) \n-   (Subtract) \n/   (Divide) \n*   (Multiply) ");
const number2 = parseFloat(prompt("Now enter your Second Number: "));

let result;
if (operator == "*") {
  result = number1 * number2;
} 
else if (operator == "-") {
    result = number1 - number2;
  } 
else if (operator == "/") {
    result = number1 / number2;
  } 
else if (operator == "+") {
    result = (number1) + (number2);
  } 
  else {
    alert("Invalid operator!");
  }
alert(number1 + operator + number2 + "=" + result);
