
// filepath: /Users/ankit/development/simple-git/repo/learning/dummy-2025-01-05T17-26-48-279Z.js
function subtract(a, b) {
      return a - b;
    }

function multiply(a, b) {
      return a * b;
    }

function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };
