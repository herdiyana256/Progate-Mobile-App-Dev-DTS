// Boolean dalam Javascript 

// Boolean adalah tipe data dalam Javascript yang memiliki dua nilai: true dan false. Nilai-nilai ini digunakan untuk mewakili kondisi benar atau salah. Boolean sering digunakan dalam ekspresi bersyarat dan operasi logis.


const usia = 28;

if(usia >= 28){
    console.log("Dewasa"); // dewasa
} else {
    console.log("Anak-Anak");

}


// Melakukan operasi logis : 
const angka1 = 10
const angka2 = 20 

// Perbandingan logika, mengevaluasi apakah angka1 lebih besar dari 5 DAN angka2 lebih kecil dari 10
const hasil = angka1 > 5 && angka2 < 10;

// Mencetak hasil dari evaluasi perbandingan logika di atas
console.log(hasil);

// false


// Menentukan nilai default 
const nama = "Regar";

const salam = nama ? `Halo, ${nama}!` : "Hallo, Regar";
console.log(salam) // Output : Hallo, Regar 




// Operator Boolean & Perbandingan 
const number = 12;
console.log(number > 10);
// true 


const number1 = 8;
console.log(number1 > 10);
// false 




// Boolean dan pernyataan if
//Di slide sebelumnya, kita mempelajari bahwa pernyataan bersyarat akan menghasilkan nilai boolean. Berdasarkan pengetahuan ini, Anda tahu bahwa code di pernyataan if akan berjalan jika hasilnya adalah true dan tidak berjalan jika hasilnya adalah false. Melalui gambar di bawah, periksalah alur di mana pernyataan bersyarat adalah true.

const number3 = 12
if(number >10) {
    console.log("Number lebih besar dari 10");
}

//Number lebih besar dari 10





// exampe 1 
const number4 = 12
if(true) {
    console.log("number lebih besar dari 10");
}
//Number lebih besari dari 10




// Perbandingan Nilai 
//Simbol > yang digunakan di pernyataan bersyarat merupakan operator perbandingan ukuran nilai. Untuk a < b berarti, jika a kurang dari b, pernyataannya akan menjadi true, jika a sama dengan atau lebih besar dari b pernyataan akan menjadi false. Sama untuk a <= b, jika a kurang atau sama dengan b, pernyataan akan menjadi true, dan sebaliknya.
const number5 = 12;

console.log(number <30);


console.log(number <= 12);

console.log(number > 12);

console.log(number < 12);

console.log(number >=12);

console.log(number == 12);

/*

true
true
false
false
true
true

*/



// exercise
const age = 24;

// Cetak hasil dari age >= 18
console.log(age >=18);

// Cetak hasil dari age < 18
console.log(age <18);

/* Ketika nilai dari age lebih besar atau sama dengan 18
dan cetak "Saya berusia lebih dari 18 tahun" */
if (age >= 18) {
console.log("Saya berusia lebih dari 18 tahun");
}