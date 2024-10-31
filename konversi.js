// Konversi ke string
let number = 123
let boolean = true 

let strNumber = String(number)
let strBoolean = boolean.toString()

console.log(strNumber)
console.log(strBoolean)

// Konversi ke number
// Number()
let numStr = Number(strNumber)
let numStr1 = Number(boolean)

console.log(numStr)
console.log(numStr1)

// ParseInt(): Membaca karakter satu per satu
let cm = '20cm';

const intFromCM = parseInt(cm);
console.log(intFromCM)

// ParseFloat()
cm = '20.55cm';

const floatFromCM = parseFloat(cm);
console.log(floatFromCM)

// Boolean: Mengandung nilai truthy dan falsy
// Falsy: false, 0, 0.0, NaN, null, undefined, '', "", ``
console.log("1" * 1)