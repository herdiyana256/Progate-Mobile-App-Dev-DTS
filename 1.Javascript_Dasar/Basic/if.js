// Percabangan Kondisional 
//Selanjutnya, mari kita pelajari percabangan kondisional, sebuah konsep penting dalam pemrograman. Saat mempelajari pemrograman, akan ada saatnya di mana Anda ingin menentukan kapan code tertentu ingin dijalankan. Perintah ini disebut percabangan kondisional.

const number = 12;

console.log("number lebih besar dari 10");



//Struktur dari pernyataan if 
//Ketika menggunakan pernyataan if, percabangan bersyarat "jika X maka Y" akan diaktifkan. Syarat tersebut dituliskan setelah if dan code di dalam kurung kurawal { } akan dieksekusi saat syarat di dalam if terpenuhi. Pahami cara menulis pernyataan if melalui gambar di bawah ini.

if(kondisi) {
    // ketik code disini 
};

// example

const number = 12;
if(ketika number melebihi 10) {
    console.log("number lebih besar dari 10")
}



// Menulis Code dengan pernyataan if
/*
Mari kita lihat cara kerja code pernyataan if.
Pertama, baca pernyataan bersyarat pada gambar sebelah kiri. Syarat number > 10 berarti "nilai angka constant harus lebih besar daripada 10." Saat 12 ditetapkan ke constant number, syarat ini terpenuhi, maka codenya akan dijalankan.
*/

const number = 12;

if(number > 10) {
    // Kondisi number lebih nesar dari 10
    console.log("number lebih besar dari 10");
}
//number lebih besar dari 10

