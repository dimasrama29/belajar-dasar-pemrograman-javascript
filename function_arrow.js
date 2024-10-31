// function expression
const convertCelciusToFahrenheit = function (temperatureCelcius) {
    const result = 9 / 5 * temperatureCelcius + 32 
    return result 
}

const temperatureFahrenheit = convertCelciusToFahrenheit(90)
console.log(temperatureFahrenheit)

// function arrow
const convertCelciusToFahrenheitArrow = (temperatureCelcius) => {
    const result = 9 / 5 * temperatureCelcius + 32 
    return result 
}

const temperatureFahrenheit2 = convertCelciusToFahrenheitArrow(90)
console.log(temperatureFahrenheit)

// function arrow sederhana | Hanya bisa untuk 1 return value
const convertCelciusToFahrenheitArrow2 = (temperatureCelcius) => 9 / 5 * temperatureCelcius + 32 

const temperatureFahrenheit3 = convertCelciusToFahrenheitArrow2(90)
console.log(temperatureFahrenheit3)



/**
 * => Disebut fat arrow
 */