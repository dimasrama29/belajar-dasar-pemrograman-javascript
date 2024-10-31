// Tanpa function
let temperatureCelcius = 90 
let temperatureFahrenheit = 9 / 5 * temperatureCelcius + 32
console.log(temperatureFahrenheit)

// Dengan function | Membuat function
function convertCelciusToFahrenheit(temperatureCelcius) {
    console.log(9 / 5 * temperatureCelcius + 32)
}

// Memanggil function
convertCelciusToFahrenheit(90)
convertCelciusToFahrenheit(50)

/**
 * function greetWorld() {
 *  console.log("Hello World!")
 * }
 * function: function keyword
 * greetWorld(): identifier
 * {console.log("Hello World!")}: function body
 * function body: Kumpulan statement
 * Javascript dapat melakukan hoisting
 */