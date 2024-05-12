// Else - Jika kondisi tidak terpenuhi 
// digunakan untuk menjalankan blok kode jika kondisi yang di periksa dalam pernyataan if sebelum nya tidak terpenuhi 


// if(kondisi) {
//     // blok kode jika kondisi benar
// } else {
//     // blok kode jika kondisi salah 

// }


// usage / exercise else basic
let usia = 28;
if(usia >= 28) { // lebih besar atau sama dengan 
    console.log("Saya sudah dewasa"); // true
} else {
    console.log("Saya masih anak-anak");
}



// else if 
let value = 95;

if(value >= 90) { //A
    console.log("A");
} else if(value >= 80) {
    console.log("B");
} else if(value >= 70) {
    console.log("C");
} else {
    console.log("D");
}



// Jika kondisi tidak terpenuhi 
const number = 10;
// lebih besari dari 10 - lebih kecil dari 10



// example other 
const nomor = 10;
if(nomor > 15) {
    console.log("nomor lebih besar dari 15");
} 
if(number <= 15){
    console.log("nomor lebih kecil atau sama dengan 15");
}

//nomor lebih kecil atau sama dengan 15





// example other II 
const number0 = 10;

if(number0 > 20) {
    console.log("Nomor lebih besar dari 20");
} else {
    console.log("Nomor lebih kecil dari 20"); // trur
    //Nomor lebih kecil dari 20
}


// example  other III
const age = 17;

// Ketika kondisi tidak terpenuhi, cetak "Saya berusia di bawah 18 tahun"
if (age >= 18) {
  console.log("Saya berusia diatas 18 tahun");
} else {
  console.log("Saya berusia dibawah 18 tahun");
}

