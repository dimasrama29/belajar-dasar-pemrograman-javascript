function multiply (a, b) {
    return a * b 
}

function calculate (operation, numA, numB) { // Nilai argumen function lain
    return operation(numA, numB)
}

const result = calculate(multiply, 2, 4) // Dapat dikirimkan sebagai parameter function lain
console.log(result)

// Dapat disimpan sebagai nilai dalam variabel
const multiplyFunc = multiply;
console.log(multiplyFunc(2, 4))

// mengembalikan nilai dari suatu function
function multiplier(x) {
    return function (num) {
      return x * num;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));


/**
 * Function sebagai first-class citizen
 *  Bisa dijadikan nilai dan disimpan dalam variable
 *  nilai argumen function lain
 *  mengembalikan nilai dari suatu function
 *  Dapat disimpan sebagai nilai dalam variabel.
 *  Dapat dikembalikan dari suatu function.
 *  Dapat dikirimkan sebagai parameter bagi function lain.
 *  Dapat disimpan dalam elemen array dan object literal.
 *  Dapat memiliki method dan properties sendiri.
 */