let data = undefined

console.log(data)

// Tidak tampak karena json tidak mendukung undefined
const name = {"first": "Dicoding", "last": undefined}
console.log(JSON.stringify(name)) // Ubah object menjadi json

/**
 * Undefined: Nilai ketika deklarasi variable tanpa inisialisasi nilai apapun
 */