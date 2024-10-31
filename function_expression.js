greetWorldStatement()
function greetWorldStatement (message) {
    console.log("Hello World")
}

// greetWorldExpression() Tidak bisa
const greetWorldExpression = function (message) {
    console.log("Hello World")
}

/**
 * function expression tidak memilki hoisting
 */