//Pertama, mari kita tinjau cara menggunakan variable, yang telah kita pelajari dalam JavaScript Study Ⅰ (ES6). Untuk mengingat kembali, mari coba mencetak angka dari 1 hingga 5 secara berurutan di console seperti yang ditunjukkan gambar di bawah ini.

var numbers = [1, 2, 3, 4, 5, 6];

// Loop melalui setiap angka dan mencetaknya secara terpisah
numbers.forEach(function(number) {
    console.log(number);
});
/*

1
2
3
4
5
6

*/



// atau bisa menggunakan cara ini - menggunakan variable 
let number1 = 1;
console.log(number1);

number1 += 1; // tambahkan 1 ke setiap variabel number1
console.log(number1);
// output : 2 




// Soal 
/*
Deklarasikan variabel number dan beri nilai awal 1.
Ulangi langkah-langkah berikut sebanyak 4 kali:
Cetak nilai number.
Tambahkan 1 ke nilai number.
Dengan langkah-langkah ini, Anda akan mencetak angka dari 1 hingga 5 di konsol.

*/
let value = 1;

console.log(value);
value += 1;


console.log(value);
value += 1;


console.log(value);
value += 1;

console.log(value)
value += 1;


console.log(value)
value += 1;


/*
1
2
3
4
5

*/