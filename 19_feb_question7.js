function multiply(a, b) {
    return a * b;
}

function multiplyNumbers(num1, num2) {
    return multiply.apply(null, [num1, num2]);
}

console.log(multiplyNumbers(5, 3)); 
console.log(multiplyNumbers(7, 2)); 
