// && (Dan)
//Selanjutnya kita akan pelajari cara menggabungkan beberapa syarat. Pertama, kita akan mempelajari &&. Syarat 1 && Syarat 2 berarti "Syarat 1 dan Syarat 2" di mana hanya jika semua persyaratan bernilai true, maka keseluruhan ekspresi bernilai true. Contohnya "Lebih besar dari 10 dan lebih kecil dari 30" tidak dapat ditulis sebagai 10 < x < 30. Pada kasus ini, gunakan &&!


// true && true  -> true 
// true && false -> false 
// false && true -> false 
// false && false -> false 


// ketika x adalah 20 : x > 10 && x < 30 .







// || operator logika atau (or)
//Selanjutnya, kita akan mempelajari simbol yang berarti "OR" (Atau). Atau diekspresikan dalam bentuk ||. Syarat 1 || Syarat 2 berarti "Syarat 1 atau Syarat 2". Pada kasus ini, di antara beberapa syarat, jika salah satunya bernilai true, maka keseluruhan ekspresi menjadi true.
// jika salah satu ada benar jadi benar

// true || true -> true 
// true || false -> true 
// false || true -> true
// false || false -> false

// ketika x adalah 5  : x < 10 || x > 30 ....true
// ketika x adalah 20 : x < 10 || x > 30 ... false 



// contoh penggabungan menggunakan logika and &&
const number = 31;
if(number >= 10 && number < 100){
    console.log("number berdigit 2");
}
//number berdigit 2


// logika and &&
let number1 = 30;
if(number >= 20 && number1 > 100){
    console.log("number berdigit 30");
}



// logika and &&

age = 28;

if(age >= 25 && age < 50) {
    console.log("usia saya sudah 28 tahun");
}
//usia saya sudah 28 tahun


// logoka and &&
let username = "admin";
let password = "binanjing";

if(username  === "admin" && password === "binanjing") {
    console.log("anda berhasil login!"); // true 
} else {
    console.log("password/ username salah!");
}
//anda berhasil login!




//logoka and &&
let angka = 10;
let isGenap = angka % 2 === 0; // mengecek apakah angka genap

if (angka > 0 && isGenap) { // cek angka positif dan genap
  console.log(angka + " adalah bilangan genap positif.");
} else {
  console.log(angka + " bukan bilangan genap positif.");
}


// logika or (atau)
const value = 10;

if(value >= 20 || value < 100){
    console.log("number berdigit 10"); // salah satu benar maka terpenuhi untuk logika atau 
}








