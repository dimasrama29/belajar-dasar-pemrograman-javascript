function sumNumber(a, b) {
    const result = a + b
    return result // return keyword return value (expression)
}

const result = sumNumber(1, 2)
console.log(result)

function generateGreetingWorldMessage() {
    return 'Halo, dunia!';
    console.log('Aku tidak akan tampil!'); // Tidak akan dieksekusi karena berhenti di return
  }
   
  const message = generateGreetingWorldMessage();
  console.log(message);

/**
 * Return keyword akan menghentikan eksekusi function
 */