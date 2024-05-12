// Looping for di Javascript


//Looping atau perulangan adalah konsep pemrograman yang memungkinkan kita menjalankan blok kode secara berulang kali. Ini sangat berguna untuk menghemat waktu dan baris kode ketika kita perlu melakukan sesuatu berulang-ulang, misalnya iterasi melalui data dalam array.

for(initialization; CSSConditionRule; increment/Decrement){
    // Blok kode yang akan di ulang
}

/*
note :
Initialization (Inisialisasi): Bagian ini digunakan untuk menginisialisasi variabel counter yang akan digunakan untuk melacak jumlah iterasi loop. Biasanya dimulai dengan nilai awal, misalnya let i = 0.
Condition (Kondisi): Ini adalah ekspresi boolean yang menentukan apakah loop akan terus dijalankan. Loop akan terus berjalan selama kondisi bernilai true.
Increment/Decrement (Penambahan/Pengurangan): Bagian ini digunakan untuk memperbarui nilai counter setelah setiap iterasi loop. Biasanya menggunakan increment (i++) untuk menambah nilai counter atau decrement (i--) untuk mengurangi nilai counter.
*/


for(let i = 1; i <= 5; i++) {
    console.log(i);
    i++;
}
// 1,3,5 -> jika gunakan i++ 
// 1,2,3,4,5 -> jika tidak gunakan i++



// Summary 
for(variable; CSSConditionRule; update;){
    // Code 
}// tidak membutuhkan titik koma




// example code menggunakan loop while 
let number =1; 
// pendefinisial variabel 
while(number <= 100) {
    console.log(number);
    number += 1;
}// menampilkan 1 - 100 




// example code menggunakan loop for 
for(let number = 1; number <= 50; number += 1) {
    console.log(number);
}
// angka 1 - 50




// penyingkatan penulisan operator 
// additional || subtraction
number = number + 1 (menjadi number += 1) atau (menjadi number++)



// menggunakan penyingkatan 
for(let number = 1; number <= 10; number++){
    console.log(number);
}
// angka 1 - 10 





/*
tugas 
Pertama, kita mendefinisikan variabel number dan memberinya nilai awal 1.
Kemudian, kita menentukan kondisi loop: loop akan terus berjalan selama nilai number kurang dari atau sama dengan 100.
Setiap iterasi, kita mencetak nilai number ke konsol.
Setelah mencetak nilai, kita menambahkan 1 ke nilai number
*/
for(let number = 1; number <= 100; number++) {
    console.log(number);
}
// angka 1 = 100