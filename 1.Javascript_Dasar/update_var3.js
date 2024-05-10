// Mendeklarasikan variabel const untuk object :

const person = {
    name: "Herdiyan Adam",
    age : 28,
};

console.log(person); 

person.name = "Herdiyan Putra";
console.log(person);

person = {name: "Helmi Rhama", age: 21}; //// Error: Assignment to constant variable.

/*
{ name: 'Herdiyan Adam', age: 28 }
{ name: 'Herdiyan Putra', age: 28 }
*/


/*
Summary : 
Perbedaan Antara
Constant & Variable
Seperti yang dapat Anda lihat pada contoh di kiri, variable (let) dapat diperbarui. Namun, constant tidak dapat diperbarui. Jika Anda mencoba untuk memperbarui nilai constant, seperti ditunjukkan di sisi kanan, Anda akan mendapatkan pesan error.


note :
Manfaat Menggunakan Constant
Manfaat constant adalah untuk mencegah perubahan nilai. Sekilas mungkin terlihat tidak praktis. Namun, ini dapat mencegah perubahan yang tidak diinginkan supaya code Anda lebih aman. Semakin banyak code yang Anda tulis, semakin Anda akan merasakan manfaatnya. Untuk seterusnya, kita akan lebih sering menggunakan constant.
*/




// Assignment 
// Deklarasikan constant language
const language = "Prancis";

// Cetak nilai constant language
console.log(language);

// Gunakan constant language untuk mencetak "Saya bisa berbicara bahasa ____"
console.log("Saya bisa berbicara bahasa" + language);

/*
Prancis 
Saya bisa berbicara bahasa Prancis

*/