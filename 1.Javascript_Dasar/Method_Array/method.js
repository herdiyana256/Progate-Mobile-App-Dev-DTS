// Method push 
//ethod push digunakan untuk menambahkan nilai baru ke akhir array. Caranya seperti gambar di bawah, ketik arrayName.push(nilai), di mana Anda dapat memasukkan nilai baru yang ingin Anda tambahkan ke akhir array di dalam () tepat setelah kata push.

const numbers = [1,2,3];

console.log(numbers);

numbers.push(4);
console.log(numbers);
/*
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
*/



//Contoh lain
const characters = ["Ninja Ken", "Baby Ben", "Guru Domba"];

console.log(characters);

// Tambahkan string "Birdie" ke array characters dengan method push
characters.push("Birdie");

// Cetak array characters
console.log(characters);

/*

[ 'Ninja Ken', 'Baby Ben', 'Guru Domba' ]
[ 'Ninja Ken', 'Baby Ben', 'Guru Domba', 'Birdie' ]
*/
