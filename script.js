const number1 = prompt("Welcome to Fast-Calculate! Please Enter your First Number: ");
if (isDigit (number1) == false) {
    alert("Invalid Input! Please enter a valid First number");
}
else {
const operator = prompt("Choose Operation:\n+   (Add) \n-   (Subtract) \n/   (Divide) \n*   (Multiply) ");
}
const number2 = prompt("Now enter your Second Number: ");
if (isDigit (number2) == false) {
    alert("Invalid Input! Please enter a valid Second number");
  }
  var result;
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
    result = parseInt(number1) + parseInt(number2);
  } 
else {
    alert("Invalid Operator");
  }
  alert(number1 + operator + number2 "=" result);

  
  Number.isDigit(input);
  
