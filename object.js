// Membuat object literals
const user = {} // object dengan property kosong
const products = {
    name: "Sepatu", 
    price: 25000,
    "last name": "Rama",
} // name: key, "Sepatu": value, pasangan key-value disebut property

// Akses property di object | dot (.) | Kekurangan: tidak boleh mengandung spasi, angka, spesial karakter
console.log(products.name)

// Akses property di object | []
console.log(products["last name"])

// Tanpa destructuring object
const nama = products.name 
const harga = products.price
console.log(nama, harga)

// Akses property di object | object destructuring: Mengeluarkan nilai dari property object ke variable
const { name, price } = products
console.log(name, price)

// Destructuring object bisa mengembalikan undefined, gunakan default value
const { isMale = true, age = 25 } = products
console.log(isMale, age)

// Ubah nilai property object
const account = {
    balance: 1000,
    debt: 10,
}

console.log(account.balance)
account.balance = 5000
console.log(account.balance)

// Hapus property object | dot (.)
console.log(account)
delete account.debt
console.log(account)

// Hapus property object | []
console.log(account)
delete account["balance"]
console.log(account)

/**
 * Object: Kumpulan key-value
 * Selain string, number, boolean, symbol, undefined, null, semua dianggap object
 * 
 */