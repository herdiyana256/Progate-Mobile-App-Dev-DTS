// Menangani beberapa nilai
/*
Mari kita pelajari cara menangani beberapa nilai.
Misalnya, bila terdapat nama buah-buahan yang berbeda sebagai nilai, membuat istilah seperti "daftar buah" akan lebih mudah dibandingkan mendefinisikannya sebagai variable yang terpisah.
*/

const fruit1 = "Apel";
const fruit2 = "Pisang";
const fruit3 = "Alpukat";
const fruit4 = "Jeruk";



// Apa yang di maksud dengan Array 
//Bila Anda ingin mengelola beberapa nilai sebagai grup, array akan sangat bermanfaat. Array dibuat seperti [nilai1, nilai2, nilai3]. Setiap nilai dalam array disebut element. Saat menggunakan array, beberapa string atau integer dapat dituliskan secara bersamaan seperti yang ditampilkan di gambar kanan.

[nilai, nilai2, nilai3];



// contoh array 
["Apel", "Pisang", "Jeruk"];


// Array bernilai integer
[21,29,45];




// Memberikan Array 
//Karena array juga merupakan nilai, array dapat dibuat sebagai constant atau variable. Dalam kasus ini, nama constant yang akan diberikan untuk array sering kali berada dalam bentuk plural seperti fruits, names, dsb. Bila Anda mencetak dengan console.log(constantName) seperti yang ditunjukkan di sebelah kiri, array akan dicetak di console.
const fruits = ["apel", "pisang", "jeruk"];

console.log(fruits);
//[ 'apel', 'pisang', 'jeruk' ]




// nomor index 
// Setiap element array memiliki nomor index. Hal penting untuk Anda ingat: nomor index dimulai dari 0.
["apel", "pisang", "jeruk"]
 0            1      2





 // Mendapatkan element array 
 //Untuk mendapatkan element array, gunakan nomor index seperti berikut: array[indexNumber]. Seperti contoh di bawah, untuk mendapatkan "apel" Anda dapat menulis fruits[0] (0 adalah nomor index "apel").

 const buah = ["mangga", "salak", "naga"]; 

 console.log(buah[0]);
 console.log(buah[1]);
 console.log(buah[2]);

 /*
mangga
salak
naga
 */




const animals = ["anjing", "kucing", "domba"];

// Cetak element array pertama
console.log(animals[0]);

// Cetak element array ketiga
console.log(animals[2]);





// mengupdate element array 
const buahan = ["manggis", "jambu", "semangka"];

console.log(buahan[0]);

buahan[0] = "markisa";

console.log(buahan[0]);

/*
manggis
markisa
*/



const animals = ["anjing", "kucing", "domba"];

// Ganti element ketiga dari array menjadi "kelinci"
animals[2] = "kelinci";

// Cetak array ketiga dari constant animal ke console
console.log(animals[2]);

/*
kelinci
*/




// melakukan iterasi dengan array 
//Ada kalanya iterasi digunakan dengan array.
//Di bab ini, mari kita gunakan loop for untuk mendapatkan setiap element di dalam array.
const fruits = ["melon", "nanas", "belimbing"];
